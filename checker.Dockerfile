FROM python:latest

WORKDIR /usr/src/checker

COPY ./solution-checker .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3", "checker_service.py"]

