from flask import flash 
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL



class Dojo :
    def __init__(self , data_dict):
        self.id = data_dict['id']
        self.name = data_dict['name']
        self.location = data_dict['location']
        self.language = data_dict['language']
        self.comment = data_dict['comment']
        self.created_at = data_dict['created_at']
        self.updated_at = data_dict['updated_at']


    @classmethod
    def create(cls , data) :
        query = """ INSERT INTO dojo 
        (name , location , language , comment )
        VALUES
        ( %(name)s,%(location)s,%(language)s,%(comment)s)
        """   
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_one_dojo_by_id(cls, data):
        query = """
        SELECT * FROM dojo WHERE id = %(id)s ;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    

    @staticmethod
    def validate(dojo):
        is_valid = True 
        if len(dojo['name']) < 3:
            flash("Name must be at least 3 characters")
            is_valid = False
        if len(dojo['comment']) < 10:
            flash("comment must be at least 3 characters")
            is_valid = False
        return is_valid


    
