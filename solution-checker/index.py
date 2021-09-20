import subprocess
from decouple import config
from pymongo import MongoClient


MONGODB_USER = config("MONGODB_USER")
MONGODB_USER_PASS = config("MONGODB_USER_PASS")
MONGODB_HOST = config("MONGODB_HOST")

url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'
client = MongoClient(url)
db = client.codearena_mdb

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
        "status": "correct"
    },
    {
        "coder_id": 124,
        "task_id": 17,
        "solution": solution_2,
        "test_cases": test_cases_1,
        "status": "edited"
    },
    {
        "coder_id": 125,
        "task_id": 12,
        "solution": solution_1,
        "test_cases": test_cases_1,
        "status": "edited"
    }
]


def populate_db(solutions):
    for i, solution in enumerate(solutions):
        result = db.solution.insert_one(solution)
        print(f"Added solution{i+1} with _id: {result.inserted_id}")
    

def create_temp_tests(solution, test_cases):
    with open('temp_tests.py', 'w') as f:
        f.write(solution)

    with open('temp_tests.py', 'a') as f:
        f.write(test_cases)


def remove_temp_tests(file):
    subprocess.run(["rm", file])


def is_solution_correct(solution, test_file):    
    create_temp_tests(solution, test_file)
    run_tests = subprocess.run(["python3", "temp_tests.py"])
    remove_temp_tests("temp_tests.py")
    return not run_tests.returncode


populate_db(solutions)

edited_count = db.solution.count_documents({"status": "edited"})
print(f"There are {edited_count} solutions to check.")

i = 1
while i < 10:
    s = db.solution.find_one({"status": "edited"})
    if s:        
        result = is_solution_correct(s["solution"], s["test_cases"])
        print(result)
        if result:      
            db.solution.update_one(
                {"_id": s["_id"]},
                { 
                    "$set": {"status": "correct"}
                }
            )
        else:
            db.solution.update_one(
                {"_id": s["_id"]},
                { 
                    "$set": {"status": "failed"}
                }
            )
    i += 1

edited_count = db.solution.count_documents({"status": "edited"})
print(f"There are {edited_count} solutions to check.")

