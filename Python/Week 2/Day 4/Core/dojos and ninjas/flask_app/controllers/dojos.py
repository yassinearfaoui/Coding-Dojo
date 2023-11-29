from flask_app import app
from flask     import render_template  , redirect, request , flash , session
from flask_app.models.dojo import Dojo



#  Index
# http://127.0.0.1:5001/dojos
@app.route('/')
def  home():
    dojos=Dojo.get_all()
    print(dojos)
    return render_template("index.html", dojos=dojos)



@app.route("/dojo/create", methods=["post"])
def create_user():
    data = {
        "name": request.form["name"],
    }
    Dojo.create(data)
    return redirect("/")



    


