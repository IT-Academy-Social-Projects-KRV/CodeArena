# get node image
FROM node:alpine as build-stage

# make directory and go to it
RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end

# copy react file to image
COPY ./front-end/ .

# install all node dependencies from package.json
RUN npm install
# build react app
RUN npm run build

# get nginx image
FROM nginx:alpine

# copy builded react app from previous image
COPY --from=build-stage /usr/src/front-end/build /var/www/react
# copy nginx configuration to image
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
