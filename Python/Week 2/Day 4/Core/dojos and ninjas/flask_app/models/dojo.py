from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Dojo :
    def __init__(self , data_dict):
        self.id = data_dict['id']
        self.name = data_dict['name']


        # CRUD QUERIES ==== classmethods 

    @classmethod
    def create(cls,data):
        query ="""
        INSERT INTO dojos
        (name)
        values
        (%(name)s);
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query = """ SELECT * FROM dojos;"""
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        for row in results:
            all_dojos.append(cls(row))
        return all_dojos  
    
    @classmethod
    def get_by_id(cls , data):
        query = """ SELECT * FROM dojos WHERE id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        
        return cls(results[0])
    
