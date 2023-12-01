from flask_app import app
from flask     import render_template  , redirect, request ,flash
from flask_app.models.dojo  import Dojo



@app.route('/')
def dashboard():
    return render_template("dashboard.html")

@app.route('/dojo/create',methods = ["POST"])
def create():
    data = {
        **request.form
    }
    if Dojo.validate(data) :
        id=Dojo.create(data)
        return redirect(f"/dojo/view/{id}")
    return redirect('/')


@app.route('/dojo/view/<int:id>')
def view_dojo(id):
    dojo=Dojo.get_one_dojo_by_id({"id" : id})
    return render_template("view_dojo.html", dojo=dojo)

