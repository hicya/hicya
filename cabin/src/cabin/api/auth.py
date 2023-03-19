import jwt
from argon2.exceptions import VerifyMismatchError

from starlette.routing import Route
from starlette.responses import JSONResponse
from sqlalchemy import select

from cabin.db.connection import async_session_maker
from cabin.models.user import User
from cabin.security.hasher import hasher


async def login(request):
    body = await request.json()

    async with async_session_maker() as session:
        user = await session.execute(select(User).filter_by(email=body["email"]))
        user = user.scalar_one()

    try:
        hasher.verify(user.password, body["password"])
    except VerifyMismatchError:
        return JSONResponse({"ok": False})

    payload = {"sub": str(user.id)}
    access_token = jwt.encode(payload, "secret", algorithm="HS256")
    return JSONResponse({"ok": True, "access_token": access_token})


AUTH_ROUTES = [Route("/login", endpoint=login, methods=["POST"])]
