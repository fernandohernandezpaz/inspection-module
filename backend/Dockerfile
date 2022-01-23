# for development
FROM node:14.18.3-alpine as base

WORKDIR /home/node/app

COPY package.json .

RUN npm install

# for production
FROM base as production

ENV NODE_PATH=./build

RUN npm run build
