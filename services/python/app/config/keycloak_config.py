import os

from schemas import authConfiguration
from dotenv import load_dotenv

load_dotenv()

SERVER_URL = os.getenv("KEYCLOAK_SERVER_URL")
REALM = os.getenv("KEYCLOAK_REALM_ID")
CLIENT_ID = os.getenv("PYTHON_OIDC_CLIENTID")
CLIENT_SECRET = os.getenv("PYTHON_OIDC_SECRET")
AUTHORIZATION_URL = os.getenv("PYTHON_AUTHORIZATION_URL")
TOKEN_URL = os.getenv("PYTHON_TOKEN_URL")

settings = authConfiguration(
    server_url=SERVER_URL,
    realm=REALM,
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    authorization_url=AUTHORIZATION_URL,
    token_url=TOKEN_URL,
)
