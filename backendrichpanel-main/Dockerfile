FROM node:10-alpine
WORKDIR /server
COPY package.json /server
RUN npm install && npm install -g nodemon
COPY . /server
CMD node app.js
EXPOSE 8000