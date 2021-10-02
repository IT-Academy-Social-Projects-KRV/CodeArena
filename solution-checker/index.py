import os
import subprocess
import tempfile

from decouple import config
from pymongo import MongoClient


solution_1 = """
def subtract(x, y):
    return x - y
"""

solution_2 = """
def subtract(x, y):
    return x + y
"""

test_cases_1 = """
assert subtract(5, 3) == 2
assert subtract(7, 4) == 3
"""

solutions = [
    {
        "coder_id": 123,
        "task_id": 12,
        "solution": solution_1,
        "test_cases": test_cases_1,
        "language": "Python",
        "status": "correct"
    },
    {
        "coder_id": 124,
        "task_id": 17,
        "solution": solution_2,
        "test_cases": test_cases_1,
        "language": "Python",
        "status": "edited"
    },
    {
        "coder_id": 125,
        "task_id": 12,
        "solution": solution_1,
        "test_cases": test_cases_1,
        "language": "Python",
        "status": "edited"
    },
    {
        "coder_id": 123,
        "task_id": 12,
        "solution": solution_2,
        "test_cases": test_cases_1,
        "language": "Python",
        "status": "edited"
    }
]


def populate_db(solutions):
    for i, solution in enumerate(solutions):
        result = db.solution.insert_one(solution)
        print(f"Added solution{i+1} with _id: {result.inserted_id}")


class BaseSolutionChecker:
    def __init__(self, solution, test_cases):
        self.solution = solution
        self.test_cases = test_cases
        with tempfile.NamedTemporaryFile(delete=False) as fp:
            self.fp = fp
            fp.write(self.solution.encode())
            fp.write("\n".encode())
            fp.write(self.test_cases.encode())

    def is_solution_ok(self):
        raise NotImplementedError

    def remove_temp_file(self):
        os.unlink(self.fp.name)


class PythonSolutionChecker(BaseSolutionChecker):
    def is_solution_ok(self):
        process = subprocess.run(["python3", self.fp.name], stderr=subprocess.DEVNULL)
        return not process.returncode


class TestRunnerDaemon:
    def __init__(self, db):
        self.db = db

    def run(self):
        while True:
            s = db.solution.find_one({"status": "edited"})
            if s:
                checker = LANGUAGE_MAPPING[s["language"]](s["solution"], s["test_cases"])
                result = checker.is_solution_ok()
                checker.remove_temp_file()
                status = "correct" if result else "failed"
                print(status)
                db.solution.update_one({"_id": s["_id"]}, {"$set": {"status": status}})


if __name__ == "__main__":
    LANGUAGE_MAPPING = {"Python": PythonSolutionChecker}
    MONGODB_USER = config("MONGODB_USER")
    MONGODB_USER_PASS = config("MONGODB_USER_PASS")
    MONGODB_HOST = config("MONGODB_HOST")

    url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'
    client = MongoClient(url)
    db = client.codearena_mdb

    populate_db(solutions)

    edited_count = db.solution.count_documents({"status": "edited"})
    print(f"There are {edited_count} solutions to check.")

    test_runner = TestRunnerDaemon(db)
    test_runner.run()
    