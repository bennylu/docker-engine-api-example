FROM node:lts-bullseye-slim

WORKDIR /user/src/app

COPY *.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]