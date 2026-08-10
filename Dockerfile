FROM node:24.13.0-alpine
LABEL authors="rozhr"

WORKDIR /app

COPY package*.json ./
COPY ./src ./src

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]