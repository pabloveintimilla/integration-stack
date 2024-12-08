# Manage centralized authentication and authorization

## Problem Statement


## Proposed Solution

Use Keycloak IAM to manage all process of authn and authz

![Diagram of keycloak](../assets/img/authz-keycloak.png)

### Test

1. Up the stack
2. Configure Keycloak, import configuration files from [keycloak docs](keycloak), and create user for teacher and student
3. Setup postman, import [postman collection](postman/integration_stack.postman_collection.json)
3. In postman:
  - Configure collection variables as a teacher user
  - Obtain access token
  - Test permission
![Screenshot of test permission](../assets/img/authz-test.png)