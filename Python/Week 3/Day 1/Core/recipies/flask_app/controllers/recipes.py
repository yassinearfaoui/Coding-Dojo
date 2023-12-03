from flask_app.models.recipe_model import Recipe
from flask import redirect,render_template,flash,session,request
from flask_app import app
from flask_app.models import user_model


#  new recipe : GET METHOD
@app.route("/recipe/new")
def new() :
    if not 'user_id' in session :
        return redirect('/')
    return render_template("new_recipe.html")

# get method 
# view one_recipe
@app.route('/recipe/<int:id>')
def one_recipe(id):
    if not 'user_id' in session :
        return redirect('/')
    data={'id':session['user_id']}
    logged_user = user_model.User.get_by_id(data)
    one_recipe = Recipe.get_by_id({'id': id})
    return render_template("view_recipe.html" , user = logged_user , recipe = one_recipe)

# post method
# create a new recipe
@app.route("/recipe/create" ,methods  =['post'])
def create_recipe():
    data={**request.form}
    print('++++++++',data)
    if  Recipe.validate(data):
        data = {**request.form , 'user_id': int(session['user_id'])}
        Recipe.create(data)
        return redirect("/dashboard")
    return redirect("/recipe/new")



# get method
# EDIT  recipe
@app.route('/recipe/<int:id>/edit')
def EDIT_recipe(id):
    if not 'user_id' in session :
        return redirect('/')
    recipe = Recipe.get_by_id({'id' : id})
    print("🥨🥨🥐🥐🥐🍞🥨🥐" , Recipe.get_by_id({'id' : id}) , "🥨🥨🥐🥐🥐🍞🥨🥐")
    return render_template("update_recipe.html"  , recipe = recipe)


# get method
# update recipe
@app.route('/recipe/<int:id>/update' , methods = ['post'])
def update_recipe(id):
    if not 'user_id' in session :
        return redirect('/')
    if  Recipe.validate(request.form):
        data = {**request.form , 'id': id}
        Recipe.update(data)
        return redirect("/dashboard")
    return redirect(f"/recipe/{id}/edit")


@app.route('/recipe/delete' , methods = ['post'])
def destroy():
    Recipe.destroy({'id' : request.form['id']})
    return redirect('/dashboard')
    