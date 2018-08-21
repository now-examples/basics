FROM mhart/alpine-node:8.11.4

LABEL name="meteor-example"

RUN mkdir /app
COPY * /app/
WORKDIR /app
RUN cat app.* > app.tar.gz
RUN tar zxf app.tar.gz
RUN rm app.*

WORKDIR bundle/programs/server
RUN apk add --no-cache make g++ python
RUN npm install --production
RUN apk del make g++ python
WORKDIR ../..

ENV PORT=3000
EXPOSE 3000
CMD ["node", "main.js"]
