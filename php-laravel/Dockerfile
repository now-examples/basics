FROM zeit/wait-for:0.2 as wait

FROM php:7-fpm-alpine
COPY --from=wait /bin/wait-for /bin/wait-for
RUN apk add --no-cache nginx curl bash
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/laravel

COPY composer.json composer.lock /var/www/laravel/
RUN composer install --prefer-dist --no-dev --no-scripts --no-autoloader

# Ensure we only have one www.conf
RUN rm -rf /usr/local/etc/php-fpm.d/
RUN mkdir /usr/local/etc/php-fpm.d/
COPY docker/www.conf /usr/local/etc/php-fpm.d/
COPY docker/php.ini /usr/local/etc/php/
COPY docker/nginx.conf /etc/nginx/

ENV APP_ENV="production"
ENV APP_KEY="base64:qqHXJg4hih7SGnL7ra7q3jf7T65K3KrYa4tikkhgUmw="
ENV APP_DEBUG="false"

COPY . .
RUN mkdir -p storage/app storage/framework/cache storage/framework/sessions storage/framework/views storage/logs
RUN composer dump-autoload && php artisan package:discover
RUN php artisan config:cache && php artisan route:cache
RUN chown -R nobody:nobody /var/www/laravel

CMD ["/bin/bash", "-c", "php-fpm -F & (wait-for /tmp/php7-fpm.sock && nginx) & wait -n"]
