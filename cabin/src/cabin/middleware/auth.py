import jwt
from starlette.authentication import (
    AuthCredentials,
    AuthenticationBackend,
    AuthenticationError,
    SimpleUser,
    UnauthenticatedUser,
)


def get_auth_from_headers(headers):
    auth = headers.get("Authorization")
    if not auth:
        return

    scheme, credentials = auth.split()
    return credentials


class CabinAuthBackend(AuthenticationBackend):
    async def authenticate(self, conn):
        credentials = get_auth_from_headers(conn.headers)
        if not credentials:
            return AuthCredentials(), UnauthenticatedUser()

        payload = jwt.decode(credentials, "secret", algorithms="HS256")

        return AuthCredentials(["authenticated"]), SimpleUser(payload["sub"])
