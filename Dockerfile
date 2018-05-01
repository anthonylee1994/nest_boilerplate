FROM node:8

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

EXPOSE 3000
ENV NODE_ENV production
CMD ["node", "./dist/main.js"]
