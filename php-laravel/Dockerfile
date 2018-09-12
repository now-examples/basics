# Build vendor deps
FROM composer:latest as vendor

COPY database/ database/
COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install --ignore-platform-reqs --no-interaction \
    --no-plugins --no-scripts --prefer-dist --no-dev

# Build frontend deps
FROM mhart/alpine-node:10 as frontend

RUN mkdir -p /app/public
COPY package.json webpack.mix.js yarn.lock /app/
COPY resources/assets/ /app/resources/assets/

WORKDIR /app
RUN yarn install && yarn production

# Build php-nginx image
FROM zeit/wait-for:0.2 as wait

FROM php:7-fpm-alpine
COPY --from=wait /bin/wait-for /bin/wait-for
COPY --from=vendor /app/vendor /var/www/laravel/vendor
COPY --from=frontend /app/public/js/ /var/www/html/public/js/
COPY --from=frontend /app/public/css/ /var/www/html/public/css/
COPY --from=frontend /app/mix-manifest.json /var/www/html/mix-manifest.json
RUN apk add --no-cache nginx curl bash

# Ensure we only have one www.conf
RUN rm -rf /usr/local/etc/php-fpm.d/
RUN mkdir /usr/local/etc/php-fpm.d/
COPY docker/www.conf /usr/local/etc/php-fpm.d/
COPY docker/php.ini /usr/local/etc/php/
COPY docker/nginx.conf /etc/nginx/

WORKDIR /var/www/laravel
COPY . .
RUN mkdir -p bootstrap/cache storage/app storage/framework/cache storage/framework/sessions storage/framework/views storage/logs
RUN php artisan route:cache
RUN chown -R nobody:nobody /var/www/laravel

CMD ["/bin/bash", "-c", "php /var/www/laravel/artisan config:cache && php-fpm -F & (wait-for /tmp/php7-fpm.sock && nginx) & wait -n"]
