FROM node:latest

WORKDIR app

ADD app.js package.json ./

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]
