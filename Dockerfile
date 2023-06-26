FROM node:latest as node

EXPOSE 8081:8080

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "serve"]