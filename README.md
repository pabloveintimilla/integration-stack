# Integration Stack

The purpose of this repository is build a stack, to test concepts of Enterprise Integration Patterns (EIP), to simplify the integration of various software systems.

This stack uses established enterprise-grade tools to support rapid development and seamless integration. The combination of Keycloak, Apache Camel, and APISIX ensures secure, efficient connectivity across the front-end and back-end services, accelerating the delivery and scalability of the platform.

![](assets/diagram.png)

1. **IAM (Identity and Access Management) - Keycloak**: Handles authentication and authorization for the entire stack, managing user identities across the system.

2. **Front-End - React**: The front-end layer where user interactions take place, built with React that integrate all components.

3. **API Gateway - Apache APISIX**: Acts as the gateway for API requests, handling routing, load balancing, is the one stop point to all conections.

4. **Integrator - Apache Camel**: Provides integration capabilities to link various services in the backend, EIP, transformation, and protocol adaptation.

5. **Services Layer**: the core systems integrated into the stack, each serving a distinct purpose:
   - **Drupal (CMS)**: A content management system used for managing and distributing content.
   - **PrestaShop (eCommerce)**: Manages online commerce, including product listings, checkout, and payments.
   - **Mautic (Marketing)**: Handles marketing automation, customer engagement, and campaigns.

## Install

1. Copy .env.example file and rename to .env
2. Update variables of .env if is necessary
3. Create SSL certificate

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt -subj "/C=US/ST=YourState/L=YourCity/O=YourOrganization/CN=localhost"
```

4. Run

```bash
docker compose up
```

## Services

| Service                                                                                     | URL                                                                                                                                                                                                         | Default users                                       |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| CMS Drupal: flexible, open-source CMS for complex, content-rich websites. Include demo data | Front: [http://localhost:1080](https://localhost:1080) API: [http://localhost:1080/jsonapi](https://localhost:1080/jsonapi)                                                                                 | User: admin Password: admin                         |
| Ecommerce PrestaShop: open-source e-commerce platform. Include demo da                      | Storefront:[https://localhost:2443](https://localhost:2443) Backoffice:[https://localhost:2443/backoffice](https://localhost:2443/backoffice) API: [https://localhost:2443/api](https://localhost:2443/api) | User: demo@prestashop.com Password: prestashop_demo |
| SMTP Mailpit Email & SMTP testing tool with API for developers                              | Backoffice:[http://localhost:8025](http://localhost:8025) SMTP port: 9025                                                                                                                                   |                                                     |
| PostgreSQL Powerful, open-source relational database, supports advanced data types.         | Drupal port: 1432                                                                                                                                                                                           | Db, pwd, user: drupal                               |
| MariaDB Open-source, MySQL-compatible relational database, fast, secure, scalable.          | PrestaShop port: 2306                                                                                                                                                                                       | Db, pwd, user: prestashop                           |
