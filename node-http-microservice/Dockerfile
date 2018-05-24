FROM mhart/alpine-node:9 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn
RUN yarn global add pkg
COPY . .
RUN pkg -t node9 . -o bin

FROM alpine
RUN apk add --no-cache libstdc++ libgcc
COPY --from=base /usr/src/bin /start
EXPOSE 3000
CMD ["/start"]
