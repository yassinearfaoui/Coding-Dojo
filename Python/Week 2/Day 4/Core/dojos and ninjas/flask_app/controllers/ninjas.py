from flask_app import app
from flask     import render_template  , redirect, request , session
from flask_app.models.ninja import ninja
from flask_app.models.dojo import Dojo




@app.route('/ninja/new')
def add_ninja():
    dojos=Dojo.get_all()
    print(dojos)
    return render_template("new_ninja.html" , dojos= dojos)

@app.route('/ninja/create', methods = ['post'])
def create_ninja():
    data = {
        **request.form
    }
    ninja.create(data)
    return redirect('/')

@app.route("/dojo/<int:id>")
def get_all_dojo_ninjas(id):
    data= {'id':id}
    ninjas = ninja.get_all_ninjas_by_dojo_id(data)
    return render_template("dojo-ninjas.html" , ninjas= ninjas , dojo = Dojo.get_by_id(data) )









