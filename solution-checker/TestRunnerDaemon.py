import os
import tempfile
import subprocess
import time
from pymongo import MongoClient
import logging
import sys
from threading import Lock, current_thread
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime

#logging.basicConfig(level=logging.INFO)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

stdout_handler = logging.StreamHandler(sys.stdout)
stdout_handler.setLevel(logging.INFO)

file_handler = logging.FileHandler('logs.csv')
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
    def __init__(self, db):
        self.db = db
        self.threadlock = Lock()
        self.start_time = datetime.now()
        

    def test_time(self):
        return str(datetime.now() - self.start_time)

    def check_solution(self, solution, counter):
        # self.threadlock.acquire()
        # logging.info(f'{solution["_id"]},{counter}')
        # db.solution.update_one(
        #     {'_id': solution['_id']},
        #     {'$set': {'status': 'testing'}},
        # )
        # self.threadlock.release()

        # logging.info(f'{solution["_id"]},{counter},{self.test_time()}')

        checker = PythonSolutionChecker(
            solution['solution'],
            solution['test_cases'])

        status = 'correct' if checker.is_solution_ok() else 'failed'

        db.solution.update_one(
            {'_id': solution['_id']},
            {'$set': {'status': status}},
        )

    def run(self):
        with ThreadPoolExecutor(max_workers=5) as executor:
            #while True:
            for i in range(2):
                solutions = self.db.solution.find({'status': 'edited'})

                for solution in solutions:
                    # self.threadlock.acquire()
                    db.solution.update_one(
                        {'_id': solution['_id']},
                        {'$set': {'status': 'testing'}},
                    )
                    executor.submit(self.check_solution, solution, i)
            logging.info(f'{self.test_time()}')


if __name__ == '__main__':
    MONGODB_USER = 'mongo-ad'
    MONGODB_USER_PASS = 'mongo-ad'
    MONGODB_HOST = 'localhost'

    url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'
    db = MongoClient(url).codearena_mdb

    TestRunnerDaemon(db).run()
