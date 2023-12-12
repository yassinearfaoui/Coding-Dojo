from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE 
from flask_app.models import user_model


class Recipe:
    def __init__(self , data_dict):
        self.id = data_dict['id']
        self.user_id = data_dict['user_id']
        self.name = data_dict['name']
        self.description = data_dict['description']
        self.instructions = data_dict['instructions']
        self.date = data_dict['date']
        self.time = data_dict['time']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
        self.poster = user_model.User.get_by_id({"id": self.user_id})


    @classmethod
    def create(cls,data):
        query = """INSERT INTO recipes 
                    (user_id,name, description, instructions, date , time)
                    VALUES 
                    (%(user_id)s,%(name)s,%(description)s,%(instructions)s,%(date)s , %(time)s);"""
        return connectToMySQL(DATABASE).query_db(query, data) 
    
    @classmethod
    def get_all(cls):
        query = """SELECT * FROM recipes"""
        results =  connectToMySQL(DATABASE).query_db(query)
        all_parties = []
        for row in results:
            all_parties.append(cls(row))
        return all_parties    

    @classmethod
    def get_by_id(cls,data):
        query = """SELECT * FROM recipes WHERE id=%(id)s;"""
        result = connectToMySQL(DATABASE).query_db(query, data)
        print ("-----------------------",result , "-----------------------")
        return cls(result[0])  
    
    @classmethod
    def update(cls,data):
        query= """UPDATE recipes
                SET 
                name= %(name)s, description= %(description)s,
                instructions= %(instructions)s,date= %(date)s , time= %(time)s
                WHERE id= %(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query= """DELETE FROM recipes WHERE id= %(id)s; """
        return connectToMySQL(DATABASE).query_db(query,data)
    

#  """""""""""""""""""""""""""""""""""""""""""VALIDATION"""""""""""""""""""""
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name'])<2:
            is_valid =False
            flash("name must be more then 2 char" , "1")
        if len(data['description'])<10:
            is_valid =False
            flash("description must be more then 10 char", "1")  
        if len(data['instructions'])<10:
            is_valid =False
            flash("instructions must be more then 10 char" ,"1") 
        if  data['date'] == ""  :
            is_valid = False  
            flash("date must be provided" ,"2")
        return is_valid