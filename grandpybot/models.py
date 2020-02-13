from flask_sqlalchemy import SQLAlchemy

from .app import app

db = SQLAlchemy(app)


class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)

    def __init__(self, name):
        self.name = name


db.create_all()
