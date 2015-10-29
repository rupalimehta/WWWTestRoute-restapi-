FROM node:0.12
RUN mkdir /src
WORKDIR /src

RUN npm install -g grunt-cli
RUN npm install -g gulp-cli
RUN npm install gulp
RUN npm install grunt
RUN npm install -g gulp


ADD html html
ADD models models
ADD test test
ADD circle.yml package.json app.js

EXPOSE 3000