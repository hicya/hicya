import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.responses import PlainTextResponse
from starlette.middleware import Middleware
from starlette.middleware.authentication import AuthenticationMiddleware

from cabin.db.connection import create_db_and_tables
from cabin.api.auth import AUTH_ROUTES
from cabin.api.user import USER_ROUTES
from cabin.middleware.auth import CabinAuthBackend


def homepage(request):
    return PlainTextResponse("Hello, world!")


async def on_startup():
    print("starting up")
    await create_db_and_tables()


app = Starlette(
    debug=True,
    routes=[
        Route("/", homepage),
        Mount("/auth", routes=AUTH_ROUTES),
        Mount("/user", routes=USER_ROUTES),
    ],
    middleware=[Middleware(AuthenticationMiddleware, backend=CabinAuthBackend())],
    on_startup=[on_startup],
)


def main():
    uvicorn.run("cabin.app:app", host="0.0.0.0", port=5000, reload=True)


if __name__ == "__main__":
    main()
