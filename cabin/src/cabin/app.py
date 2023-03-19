import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.responses import PlainTextResponse


from cabin.db.connection import create_db_and_tables


def homepage(request):
    return PlainTextResponse("Hello, world!")


app = Starlette(
    debug=True,
    routes=[
        Route("/", homepage),
    ],
)


async def on_startup():
    await create_db_and_tables()


def main():
    uvicorn.run("cabin.app:app", host="0.0.0.0", port=5000, reload=True)


if __name__ == "__main__":
    main()
