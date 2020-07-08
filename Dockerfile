FROM node:latest as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# copy the react app to the container
COPY package.json /usr/src/app
# prepare the container for building react
RUN npm install
COPY . /usr/src/app
RUN npm run build
# preprare nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

