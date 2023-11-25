from flask_app import app
from flask import redirect, render_template, request 
from flask_app.models.filmmaker_model import Filmmaker


@app.route('/'):
def indec():
    return  render_template("index.html" , Filmmakers = Filmmaker.getall()) 

@app.route('/create/filmaker' , methods = ['POSt'])
def create_filmmakers():
    data = {
        'name' : request.form['name']
    }
    Filmmaker_id = Filmmaker.save()
    return redirect('/')