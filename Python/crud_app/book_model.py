from mysqlconnection import connectToMySQL
class Book:
    def __init__(self , data_dict):
        self.id = data_dict["id"]
        self.title = data_dict["title"]
        self.author = data_dict["author"]
        self.description = data_dict["description"]
        self.pages = data_dict["pages"]
        self.genre = data_dict["genre"]
        self.cover = data_dict["cover"]
        self.price = data_dict["price"]
        self.is_available = data_dict["is_available"]
        self.created_at = data_dict["created_at"]
        self.updated_at = data_dict["updated_at"]

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        db_result = connectToMySQL("fullstack_db").query_db(query)
        print("books as rows:" , db_result, "-" *25)
        all_books = []
        for row in db_result:
            book_object = Book(row)
            all_books.append(book_object)
        return all_books
