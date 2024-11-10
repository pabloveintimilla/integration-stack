#!/bin/bash

echo "[notice] Prestashop is starting."

# Check database status
if mysqladmin ping -h prestashop_mariadb -u $DB_USER -p$DB_PASSWD > /dev/null 2>&1
then
    echo "✅ Prestashop Database is ready."
else
    echo "[warning] Prestashop database is NOT ready, check status server or connection"
    exit 1
fi

# Install Prestashop with demo data
cd /var/www/html/
if test -d install; then
    php install/index_cli.php \
        --domain=localhost:2443 \
        --db_server=prestashop_mariadb \
        --db_name=$DB_NAME \
        --db_user=$DB_USER \
        --db_password=$DB_PASSWD \
        --email=$ADMIN_MAIL\
        --password=$ADMIN_PASSWD \
        --fixtures=1 \
        --rewrite=1 \
        --theme=classic \
        --ssl=1
fi

# Clean up directories
if test -d admin; then
  mv admin backoffice
fi
if test -d install; then
  rm -Rf install/
fi

# Run apache
apache2-foreground