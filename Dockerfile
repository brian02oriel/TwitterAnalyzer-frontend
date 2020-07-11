
FROM node:latest as build
RUN mkdir -p /usr/src/app

# copy the react app to the container
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package.json /usr/src/app

# adding env variable
ARG REACT_APP_FLASK_API
ENV REACT_APP_FLASK_API "http://172.22.0.2:5000/api/twitter"

# prepare the container for building react
RUN npm install
#RUN npm run build 
RUN node --max-old-space-size=8000 node_modules/react-scripts/scripts/build.js
#node --expose-gc --max-old-space-size=1024 node_modules/react-scripts/scripts/build.js

# preprare nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

