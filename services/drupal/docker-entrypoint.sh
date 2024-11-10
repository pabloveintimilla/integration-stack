#!/bin/bash

echo "[notice] Drupal is starting."

# Check database status
if pg_isready -h drupal_postgres -d $DRUPAL_DB -U $DRUPAL_DB_USER > /dev/null 2>&1
then
    echo "✅ Database is ready."
else
    echo "[warning] Database is NOT ready, check status server or connection"
    exit 1
fi

# Check drupal installation
if /opt/drupal/vendor/bin/drush sql-query 'SELECT 1 FROM config LIMIT 1 OFFSET 0' > /dev/null 2>&1
then
    echo "✅ Drupal is ready."
else
    echo "[notice] Start drupal demo installation."
    /opt/drupal/vendor/bin/drush site:install demo_umami --no-interaction --locale=en \
        --db-url=pgsql://${DRUPAL_DB_USER}:${DRUPAL_DB_PASSWORD}@drupal_postgres/${DRUPAL_DB} \
        --account-name=${DRUPAL_USER} \
        --account-pass=${DRUPAL_PASSWORD}
    /opt/drupal/vendor/bin/drush en -y jsonapi oauth2_client -y
fi

# Run apache
apache2-foreground