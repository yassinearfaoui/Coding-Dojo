from flask import flash 
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL


class ninja :
    def __init__(self , data_dict):
        self.id = data_dict["id"]
        self.dojo_id = data_dict["dojo_id"]
        self.first_name = data_dict["first_name"]
        self.last_name = data_dict["last_name"]
        self.age = data_dict["age"]
        

    # 1- Create
    @classmethod
    def create(cls , data):
        query = """
        INSERT INTO ninjas
        (dojo_id , first_name ,last_name , age )
        VALUES
        (%(dojo_id)s , %(first_name)s , %(last_name)s , %(age)s)
        """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    
    @classmethod
    def get_all_ninjas_by_dojo_id(cls , data):
        query = """ SELECT * FROM ninjas where dojo_id = %(id)s"""
        db_result=connectToMySQL(DATABASE).query_db(query, data)
        print("************", db_result)
        all_ninjas = []
        for row in db_result:
            ninja=cls(row)
            all_ninjas.append(ninja)
        return all_ninjas

    