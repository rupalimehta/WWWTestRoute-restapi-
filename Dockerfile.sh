FROM node:0.12

RUN mkdir /src
WORKDIR /src

RUN apt-get update 
RUN apt-get install -y zip


ADD html html
ADD models models
ADD test test
ADD circle.yml package.json server.js

RUN npm install -g grunt-cli
RUN npm install -g gulp-cli
RUN npm install gulp
RUN npm install grunt
RUN npm install -g gulp



CMD ["node","app.js"]

EXPOSE 3040
