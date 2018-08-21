FROM bitwalker/alpine-elixir:1.7.2

ENV MIX_HOME=/opt/mix \
    HEX_HOME=/opt/hex \
    HOME=/opt/app

# Install Hex+Rebar
RUN mix local.hex --force && \
    mix local.rebar --force

WORKDIR /opt/app

ENV PORT=8080 MIX_ENV=prod

# Cache elixir deps
ADD mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

ADD . .

RUN mix do compile, phx.digest

USER default

EXPOSE 8080

CMD ["mix", "phx.server"]
