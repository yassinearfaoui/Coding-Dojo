from flask import Flask,render_template, session
app = Flask(__name__)  
app.secret_key = "fhf"




@app.route('/')         
def count():
    session['number']=1
    return render_template("index.html",i=session['number'])
@app.route('/increase')         
def count1():
    session['number']=int(session['number'])+1

    return render_template("index.html",i=session['number'])




if __name__=="__main__":      
    app.run(debug=True)   

