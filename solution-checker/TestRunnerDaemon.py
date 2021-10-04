import logging
import os
import subprocess
import sys
import tempfile

from concurrent.futures import ThreadPoolExecutor
from pymongo import MongoClient
from threading import Lock

# Configuration for log output
logger = logging.getLogger()
logger.setLevel(logging.INFO)

stdout_handler = logging.StreamHandler(sys.stdout)
stdout_handler.setLevel(logging.INFO)

file_handler = logging.FileHandler('logs.log')
file_handler.setLevel(logging.INFO)

logger.addHandler(file_handler)
logger.addHandler(stdout_handler)


class BaseSolutionChecker:
    def __init__(self, solution, test_cases):
        self.solution = solution
        self.test_cases = test_cases

        with tempfile.NamedTemporaryFile(delete=False) as fp:
            self.fp = fp
            fp.write(solution.encode())
            fp.write('\n'.encode())
            fp.write(test_cases.encode())

    def is_solution_ok(self):
        raise NotImplementedError

    def remove_temp_file(self):
        os.unlink(self.fp.name)


class PythonSolutionChecker(BaseSolutionChecker):
    def is_solution_ok(self):
        proces = subprocess.run(['python3', self.fp.name])
        self.remove_temp_file()
        return not proces.returncode


language_mapping = {'Python': PythonSolutionChecker}


class TestRunnerDaemon:
    def __init__(self, db, thread_workers=10):
        self.db = db
        self.thread_workers = thread_workers
        self.threadlock = Lock()

    def check_solution(self, solution):
        """
        Work on the solution in a separate thread

        Change solution status to 'correct' or 'failed'
        """

        checker = language_mapping[solution['language']](
            solution['solution'],
            solution['test_cases'])

        status = 'correct' if checker.is_solution_ok() else 'failed'

        db.solution.update_one(
            {'_id': solution['_id']},
            {'$set': {'status': status}},
        )

    def run(self):
        with ThreadPoolExecutor(max_workers=self.thread_workers) as executor:
            while True:
                solutions = self.db.solution.find({'status': 'edited'})
                
                for solution in solutions:
                    self.threadlock.acquire()
                    
                    # Change solution status to 'testing' before solving
                    db.solution.update_one(
                        {'_id': solution['_id']},
                        {'$set': {'status': 'testing'}},
                    )
                    logging.info(f'Solution {solution["_id"]} prepared')
                    
                    self.threadlock.release()

                    executor.submit(self.check_solution, solution)


if __name__ == '__main__':
    MONGODB_USER = 'mongo-ad'
    MONGODB_USER_PASS = 'mongo-ad'
    MONGODB_HOST = 'localhost'

    url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'
    db = MongoClient(url).codearena_mdb

    TestRunnerDaemon(db).run()
