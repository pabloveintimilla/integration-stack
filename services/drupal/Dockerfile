FROM drupal:11.0.6-php8.3

RUN apt update
RUN apt-get install -y git unzip postgresql-client dos2unix

# Install extend modules
WORKDIR /opt/drupal
RUN echo memory_limit=1024M > /usr/local/etc/php/conf.d/drupal.ini
RUN composer require drush/drush drupal/oauth2_client --no-interaction

COPY ["docker-entrypoint.sh","/usr/local/bin/"]
# Fix character conversion when edit sh file in windows
RUN dos2unix /usr/local/bin/docker-entrypoint.sh
CMD ["/bin/sh", "/usr/local/bin/docker-entrypoint.sh"]