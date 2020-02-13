from flask import Flask
from .app import app
from . import models

models.db.init_app(app)
