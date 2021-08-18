# get node image
FROM node:alpine

# make directory and go to it
RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end

# copy react file to image
COPY ./front-end/ .

# install all node dependencies from package.json
RUN npm install
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
