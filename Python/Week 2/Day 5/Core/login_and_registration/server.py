from flask_app import app


# ! all controllers must be imported hir 
from flask_app.controllers import user_control



if __name__ == '__main__':
    app.run(debug=True, port=5000)






