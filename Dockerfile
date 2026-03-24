ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION}

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chown -R node:node /app
USER node

EXPOSE 5173
EXPOSE 5432
EXPOSE 9000

CMD ["npm", "run", "start"]