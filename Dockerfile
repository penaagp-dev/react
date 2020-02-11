FROM node:9.6.1
MAINTAINER Sofyan Saputra "admin@adrini.com"
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . /app
RUN npm install --silent && \
    npm install -g react-scripts@1.1.1 -g --silent && \
    npm install -g yarn && \
    npm install -g serve && \
    yarn build
EXPOSE 5000