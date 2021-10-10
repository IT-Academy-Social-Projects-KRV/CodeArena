from pymongo import MongoClient
import sys


solution = {
    'coder_id': 123,
    'task_id': 12,
    'solution': 'def subtract(x, y):\n    return x - y\n',
    'test_cases': 'assert subtract(5, 3) == 2\nassert subtract(7, 4) == 3\n',
    'status': 'edited',
    'language': 'Python'
}


def populate_db(solutions):
    for solution in solutions:
        db.solution.insert_one(solution)


if __name__ == '__main__':
    MONGODB_USER = 'mongo-ad'
    MONGODB_USER_PASS = 'mongo-ad'
    MONGODB_HOST = 'localhost'

    url = f'mongodb://{MONGODB_USER}:{MONGODB_USER_PASS}@{MONGODB_HOST}/admin?retryWrites=true&w=majority'
    db = MongoClient(url).codearena_mdb

    solutions = []
    for i in range(int(sys.argv[1])):
        solutions.append(solution.copy())

    populate_db(solutions)
