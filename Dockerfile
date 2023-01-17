FROM node:latest as node

EXPOSE 8080:8080

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "serve"]