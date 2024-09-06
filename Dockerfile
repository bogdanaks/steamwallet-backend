FROM node:18.13.0-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
RUN npm run build

CMD [ "npm", "run", "start"]
