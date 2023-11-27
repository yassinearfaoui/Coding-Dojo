from flask import Flask,render_template,redirect,request
from user_model import User
app = Flask(__name__)

@app.route('/')
def AllUsers():
    users=User.get_all()
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
    User.create(data)
    return redirect("/")

@app.route("/user/<int:id>")
def one_user(id):
    one_user= User.get_one_by_id({"id": id})
    return render_template("one_user.html", user=one_user)


@app.route("/user/<int:id>/edit")
def edit(id):
    edit_user = User.get_one_by_id({'id':id})
    return render_template("EditUser.html" , User = edit_user)

@app.route("/user/update" , methods=["post"])
def update():
    data = {
        "id": request.form["id"],
        "First_name": request.form["First_name"],
        "Last_name": request.form["Last_name"],
        "Email": request.form["Email"],
    }
    id = data["id"]

    User.update(data)
    
    return redirect(f"/user/{id}")

@app.route("/user/<int:id>/destroy")
def destroy(id):
    User.delete({"id": id})
    return redirect("/")






if __name__ == "__main__":
    app.run(debug=True , port=5001)