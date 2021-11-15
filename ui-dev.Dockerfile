FROM node:16.10.0-alpine

RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end

COPY ./front-end/package.json .
COPY ./front-end/package-lock.json .

RUN npm install

RUN mkdir -p /usr/src/front-end/node_modules/.cache && chmod -R 777 /usr/src/front-end/node_modules/.cache

COPY ./front-end/ .

CMD ["npm", "start"]
