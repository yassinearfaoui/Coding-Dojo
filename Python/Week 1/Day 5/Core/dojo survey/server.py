from flask import Flask , render_template ,redirect , request , session
app = Flask(__name__) 
app.secret_key = "we are safe"


@app.route('/')         
def submit():
    return render_template('index.html')



@app.route('/process', methods = ['post'])
def process():
    print("*"*20 , request.form,"*"*20 )
    session["name"] = request.form["name"]
    session["dojo_location"] = request.form["dojo_location"]
    session["fav_language"] = request.form["fav_language"]
    session["comment"] = request.form["comment"]
    return redirect('/result')


@app.route('/result')
def result():
    return render_template("result.html")





if __name__=="__main__":     
    app.run(debug=True  , port=5001) 

