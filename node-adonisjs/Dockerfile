FROM node:alpine

WORKDIR /usr/src

COPY . .
RUN yarn --production

EXPOSE 3333

CMD ["npm", "run", "start"]