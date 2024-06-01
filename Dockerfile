FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache xdg-utils

RUN npm install

EXPOSE 1234

CMD ["npm","run","start"]

