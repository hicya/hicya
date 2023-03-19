from starlette.routing import Route
from starlette.responses import JSONResponse
from starlette.requests import Request

from cabin.db.connection import async_session_maker
from cabin.models.user import User
from cabin.security.hasher import hasher


async def create(request: Request):
    async with async_session_maker() as session:
        user = User()
        body = await request.json()
        user.password = hasher.hash(body["password"])
        user.email = body["email"]
        session.add(user)
        await session.commit()

    return JSONResponse({"ok": True})


async def test(request: Request):
    return JSONResponse(
        {
            "ok": True,
            "auth": request.user.is_authenticated,
            "sub": request.user.display_name,
        }
    )


USER_ROUTES = [
    Route("/create", endpoint=create, methods=["POST"]),
    Route("/test", endpoint=test),
]
