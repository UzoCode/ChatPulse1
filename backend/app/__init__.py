from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    db.init_app(app)
    jwt.init_app(app)

    with app.app_context():
        from .routes import auth, chat, admin, settings
        app.register_blueprint(auth.bp)
        app.register_blueprint(chat.bp)
        app.register_blueprint(admin.bp)
        app.register_blueprint(settings.bp)

        db.create_all()

    return app
