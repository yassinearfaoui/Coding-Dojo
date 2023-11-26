from flask import Flask,render_template,redirect,request
from user_model import user
app = Flask(__name__)

@app.route('/')
def AllUsers():
    users=user.get_all()
    return render_template("users.html", users=users)    



@app.route('/new user')
def insert():
    return render_template("newuser.html")


@app.route("/user/create", methods=["post"])
def create_user():
    data = {
        "First_name": request.form["First_name"],
        "Last_name": request.form["Last_name"],
        "Email": request.form["Email"],
    }
    user.create(data)
    return redirect("/")



if __name__ == "__main__":
    app.run(debug=True , port=5001)