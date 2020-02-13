import os

basedir = os.path.abspath(os.path.dirname(__file__))
SQL_ALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
