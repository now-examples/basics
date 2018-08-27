FROM elixir:1.7.2-alpine as builder

ARG MIX_ENV="prod"

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez

WORKDIR /build
COPY . .
RUN mix do deps.get --only prod --force, deps.compile, compile
RUN mix phx.digest
RUN mix release

FROM alpine:3.8

RUN apk update && \
    apk add --no-cache bash openssl-dev

WORKDIR /app
COPY --from=builder /build/_build/prod/rel/app .

ENV APP_PORT=4000
CMD trap 'exit' INT; /app/bin/app foreground

