# get node image
FROM node:16.10.0-alpine

# make directory and go to it
RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end

# copy dependencies to image
COPY ./front-end/package.json .
COPY ./front-end/package-lock.json .
 
# install all node dependencies from package.json
RUN npm install

# copy react file to image
COPY ./front-end/ .

# build react app
RUN npm run build

# install nginx
RUN apk add nginx
# add folder for nginx file
RUN mkdir -p /run/nginx
# copy nginx configuration to image
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

# copy builded react app to nginx folder
RUN cp -r /usr/src/front-end/build /var/www/react

# start nginx
CMD ["nginx", "-g", "daemon off;"] 
