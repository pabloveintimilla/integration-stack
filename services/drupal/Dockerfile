FROM drupal:11.0.6-php8.3

RUN apt update
RUN apt-get install -y git unzip postgresql-client

# Install Drupal with demo data
WORKDIR /opt/drupal
RUN echo memory_limit=1024M > /usr/local/etc/php/conf.d/drupal.ini
RUN composer require drush/drush drupal/oauth2_client --no-interaction

COPY ["docker-entrypoint.sh","/usr/local/bin/"]
CMD ["/bin/sh", "/usr/local/bin/docker-entrypoint.sh"]