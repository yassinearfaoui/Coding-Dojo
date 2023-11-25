from flask import Flask,render_template,redirect,request
from book_model import Book


app=Flask(__name__)


@app.route('/')
def dashboard():
    books= Book.get_all() 
    print("books as objects: ", "*" * 25, books,"*" * 25) 
    return render_template("index.html" , books=books)




if __name__=='__main__':
    app.run(debug=True, port=1337)