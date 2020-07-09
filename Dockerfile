FROM node:latest as build
RUN mkdir -p /usr/src/app

# copy the react app to the container
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package.json /usr/src/app

# prepare the container for building react
RUN npm install --silent
RUN npm run build

# preprare nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

