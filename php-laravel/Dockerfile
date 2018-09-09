FROM zeit/wait-for:0.2 as wait
FROM composer:latest as composer

FROM php:7-fpm-alpine
COPY --from=wait /bin/wait-for /bin/wait-for
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN apk add --no-cache nginx curl bash

WORKDIR /var/www/laravel

COPY composer.json composer.lock /var/www/laravel/
RUN composer install --prefer-dist --no-dev --no-scripts --no-autoloader

# Ensure we only have one www.conf
RUN rm -rf /usr/local/etc/php-fpm.d/
RUN mkdir /usr/local/etc/php-fpm.d/
COPY docker/www.conf /usr/local/etc/php-fpm.d/
COPY docker/php.ini /usr/local/etc/php/
COPY docker/nginx.conf /etc/nginx/

COPY . .
RUN mkdir -p storage/app storage/framework/cache storage/framework/sessions storage/framework/views storage/logs
RUN composer dump-autoload -o
RUN php artisan route:cache
RUN chown -R nobody:nobody /var/www/laravel

CMD ["/bin/bash", "-c", "php /var/www/laravel/artisan config:cache && php-fpm -F & (wait-for /tmp/php7-fpm.sock && nginx) & wait -n"]
