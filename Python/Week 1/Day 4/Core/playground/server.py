from flask import Flask,render_template  
app = Flask(__name__)  




@app.route('/play/<int:x>/<color>')          
def play(x ,color):
    return render_template("index.html", x= x, color=color)



if __name__=="__main__":    
    app.run(debug=True , port=5001)    

