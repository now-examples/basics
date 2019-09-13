# -*- coding: utf-8 -*-
import os
import uuid
from sqlalchemy import create_engine
from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

def db_connect():
    """
    Performs database connection using database settings from settings.py.
    Returns sqlalchemy engine instance
    """
    return create_engine(os.environ['DATABASE_URI'])

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "user"

    id = Column(UUID, default=generate_uuid, primary_key=True)
    username = Column(String(50), unique=True)
    password = Column(String(512))
    email = Column(String(50))

    def __repr__(self):
        return '<User %r>' % self.username


engine = db_connect()  # Connect to database
Base.metadata.create_all(engine)  # Create models
