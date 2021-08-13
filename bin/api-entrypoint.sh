#!/bin/bash
# TODO divide migration for each database
python manage.py migrate
# start gunicorn server on port 8000
gunicorn codeArena.wsgi --bind 0.0.0.0:8000
