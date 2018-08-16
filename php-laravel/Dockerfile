FROM php:7.2-fpm-alpine

RUN apk add --no-cache nginx supervisor curl
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN cd /var/www && \
  composer create-project --prefer-dist --no-dev laravel/laravel laravel

COPY config/nginx.conf /etc/nginx/
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
