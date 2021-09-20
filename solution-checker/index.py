from decouple import config
from pymongo import MongoClient


MONGODB_USER = config("MONGODB_USER")
MONGODB_USER_PASS = config("MONGODB_USER_PASS")
MONGODB_HOST = config("MONGODB_HOST")


url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'

client = MongoClient(url)

db = client.codearena_mdb

solutions = [
    {
        "coder_id": 123,
        "task_id": 12,
        "solution": "Solution1",
        "status": "edited"
    },
    {
        "coder_id": 124,
        "task_id": 17,
        "solution": "Solution2",
        "status": "correct"
    },
    {
        "coder_id": 125,
        "task_id": 18,
        "solution": "Solution3",
        "status": "published"
    },
    {
        "coder_id": 125,
        "task_id": 18,
        "solution": "Solution4",
        "status": "failed"
    },
    {
        "coder_id": 123,
        "task_id": 19,
        "solution": "Solution5",
        "status": "edited" 
    }
]

for i, solution in enumerate(solutions):
    result = db.solution.insert_one(solution)
    print(f"The solution{i+1} with _id: {result.inserted_id} was added to database.")

edited_count = db.solution.count_documents({"status": "edited"})
print(f"There are {edited_count} solutions to check.")

