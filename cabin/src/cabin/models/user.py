from sqlalchemy import Column, text, String
from sqlalchemy.dialects.postgresql import UUID

from .base import Base


class User(Base):
  __tablename__ = "user"

  # Columns
  id = Column(UUID, primary_key=True, server_default=text("uuid_generate_v4()"))
  email = Column(String)
