from flask_app.config.mysqlconnection import connectToMySQL
class Filmmaker:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def getall(cls) :
        query = "SELECT * FROM filmmakers" 
        result=connectToMySQL('film_maker').query_db(query)
        filmakers = []
        for row  in result:
            filmakers.append(cls(row))
            return filmakers
        
    @classmethod
    def  save(cls,data):
        query = """INSERT INTO filmmakers(name)
        values %(name)s"""
        return connectToMySQL('film_maker').query_db(query)

    @classmethod
    def get_by_id(cls,data):
        query= """
        SELECT * FROM filmmakers WHERE id = %(id)s
    """
        result = connectToMySQL('film_maker_db').query_db(query,data)
        return cls(result[0])

        
        