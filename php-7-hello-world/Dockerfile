FROM alpine:edge
WORKDIR /www
RUN apk add --no-cache nginx php7-fpm supervisor
COPY conf/nginx.conf /etc/nginx/
COPY conf/supervisord.conf /etc/
COPY *.php ./
CMD ["/usr/bin/supervisord"]
