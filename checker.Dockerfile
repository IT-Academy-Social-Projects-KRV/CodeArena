FROM python:latest

WORKDIR /usr/src/checker

COPY ./solution-checker/index.py .
COPY ./solution-checker/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3", "index.py"]

