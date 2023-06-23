from flask import Flask
from views import views
from flask_cors import CORS
# lsvirtualenv, workon stockEnv

app = Flask(__name__)
CORS(app)
# acess all endpoint in views from "/"
app.register_blueprint(views, url_prefix="/")


if __name__ == "__main__":
    app.run(debug=True)  # Debug auto restarts
