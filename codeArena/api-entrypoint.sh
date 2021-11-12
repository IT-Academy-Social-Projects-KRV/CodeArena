#!/bin/bash

# make django wait till database is ready
python manage.py wait_for_db

# migrate for each database
python manage.py migrate --database=default
python manage.py migrate --database=mongo

# start gunicorn server on port 8000
gunicorn codeArena.wsgi --bind 0.0.0.0:8000
