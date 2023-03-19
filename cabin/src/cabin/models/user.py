import uuid
from sqlalchemy import Column, String

from .base import Base
from .util.guid import GUID


class User(Base):
    __tablename__ = "user"

    # Columns
    id = Column(GUID(), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = Column(String)
    password = Column(String)
