FROM node:14.18.3-alpine as base

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]