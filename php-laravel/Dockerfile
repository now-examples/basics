FROM zeit/wait-for:0.2 as wait

FROM php:7-fpm-alpine
COPY --from=wait /bin/wait-for /bin/wait-for
RUN apk add --no-cache nginx curl bash
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN cd /var/www && \
  composer create-project --prefer-dist --no-dev laravel/laravel laravel
RUN rm /usr/local/bin/composer

RUN rm -rf /usr/local/etc/php-fpm.d/
RUN mkdir /usr/local/etc/php-fpm.d/
COPY config/www.conf /usr/local/etc/php-fpm.d/
COPY config/nginx.conf /etc/nginx/

CMD ["/bin/bash", "-c", "php-fpm -F & (wait-for /tmp/php7-fpm.sock && nginx) & wait -n"]