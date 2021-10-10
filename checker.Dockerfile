FROM python:latest

ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/checker

COPY ./solution-checker .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3", "checker_service.py"]

