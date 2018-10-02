FROM mhart/alpine-node:10 as build
WORKDIR /usr/src
COPY package.json ./
RUN yarn --production
COPY . .

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV PATH="./node_modules/.bin:$PATH"
ENV NODE_ENV="production"
COPY --from=build /usr/src .
EXPOSE 4000
CMD ["./node_modules/.bin/nodemon", "server.js"]
