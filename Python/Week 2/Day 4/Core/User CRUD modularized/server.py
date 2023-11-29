from flask import Flask
from flask_app.controllers.users import User
from flask_app import app
app = Flask(__name__)


if __name__ == "__main__":
    app.run(debug=True , port=5001)