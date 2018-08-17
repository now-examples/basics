FROM alpine:latest

ENV BUILD_PACKAGES bash curl-dev ruby-dev build-base
ENV RUBY_PACKAGES ruby ruby-bundler ruby-json ruby-irb ruby-rake ruby-bigdecimal
ENV RAILS_PACKAGES make gcc libc-dev libffi-dev sqlite-dev tzdata nodejs

RUN apk update && \
    apk upgrade && \
    apk --no-cache add $BUILD_PACKAGES && \
    apk --no-cache add $RUBY_PACKAGES && \
    apk --no-cache add $RAILS_PACKAGES && \
    rm -rf /var/cache/apk/*

RUN gem install bundler --no-ri --no-rdoc

WORKDIR /app
ADD Gemfile Gemfile.lock /app/
RUN bundle install --without development test --jobs `expr $(cat /proc/cpuinfo | grep -c "cpu cores") - 1` --retry 3
COPY . .
RUN chown -R nobody:nogroup /app
RUN chmod +x run.sh

CMD ["./run.sh"]