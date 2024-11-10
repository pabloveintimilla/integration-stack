FROM prestashop/prestashop:8-apache

RUN apt update
RUN apt-get install -y git unzip

#RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
#    && php composer-setup.php \
#    && php -r "unlink('composer-setup.php');"

WORKDIR /var/www/html

# Enable SSL module, configure Apache for PHP support, and enable our SSL site configuration
COPY ./localhost.crt /etc/ssl/certs/localhost.crt
COPY ./localhost.key /etc/ssl/private/localhost.key
COPY ./services/prestashop/prestashop-ssl.conf /etc/apache2/sites-available/prestashop-ssl.conf
RUN a2enmod ssl && \
    a2enmod rewrite && \
    a2dissite 000-default default-ssl && \
    a2ensite prestashop-ssl

COPY ["./services/prestashop/docker-entrypoint.sh","/usr/local/bin/"]
CMD ["/bin/sh", "/usr/local/bin/docker-entrypoint.sh"]