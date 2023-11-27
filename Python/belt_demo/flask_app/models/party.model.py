from flask import flash
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL



class party:
    def __init__(self, data_dict):
        self.id = data_dict["id"]
        self.user_id = data_dict["user_id"]
        self.title = data_dict["title"]
        self.location = data_dict["location"]
        self.date = data_dict["id"]
        self.all_ages = data_dict["all_ages"]    
        self.description = data_dict["description"]    

    @classmethod
    def create (cls, data):
        query = """
        INSERT INTO parties
        (user_id , title , location, date , all_ages , description )
        values
        (%(user_id)s , %(title)s, %(location)s , %(date)s , %(all_ages)s, %(description)s)
        """
        return connectToMySQL(DATABASE).query_db(query)
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FFROM parties "
        results = connectToMySQL(DATABASE).query_db(query)
        all_parties = []
        for row in results:
            all_parties.append(cls(row))

        return all_parties
    @classmethod
    def get_by_id(cls , data):
        query= '''SELECT *FROM parties WHERE id=%(id)s'''
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result :
            return cls(result[0])
        return None
    
    @classmethod
    def get_user_parties(cls,data):
        query = """
        SELECT * FROM parties  WHERE user_id = %(user_id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query,data)
        user_parties = []
        for row in results :
            user_parties.append(cls(row))
            return user_parties

    @classmethod
    def update(cls , data ):
        query = """
        UPDATE parties SET title = %(title)s , location = %(location)s , date = %(date)s , all_ages = %(all_ages)s,
        description = %(description)s
        WHERE id = %(id)s
        """   
        return connectToMySQL(DATABASE).query_db(query,data)
    

    


