from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import async_sessionmaker
from cabin.models.base import Base

# DATABASE_URL = "postgresql+asyncpg://postgres:postgres@localhost:5432/main"
DATABASE_URL = "sqlite+aiosqlite:///data/cabin.db"

engine = create_async_engine(DATABASE_URL)

async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
