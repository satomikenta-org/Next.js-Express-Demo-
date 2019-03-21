FROM node:alpine
WORKDIR /app/next-app
COPY ./package.json .
RUN npm i
COPY . .
RUN npm run build
CMD [ "npm", "run", "start"]
