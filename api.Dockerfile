# get python image
FROM python:latest

# make directory and go inside it
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# copy dependencies to image
COPY ./requirements.txt .

# install all python packages
RUN pip install --no-cache-dir -r requirements.txt

# copy django file to image
COPY ./codeArena .

# entry point for api container
ENTRYPOINT [ "sh", "api-entrypoint.sh" ]
