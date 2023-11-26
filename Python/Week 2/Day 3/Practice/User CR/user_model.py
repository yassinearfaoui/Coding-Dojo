from mysqlconnection import connectToMySQL

class user:
    def __init__(self, data_dict):
        self.id = data_dict["id"]
        self.First_name = data_dict["First_name"]
        self.Last_name = data_dict["Last_name"]
        self.Email = data_dict["Email"]
        self.created_at = data_dict["created_at"]
        self.updated_at = data_dict["updated_at"]
        

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        db_result = connectToMySQL("users_schema").query_db(query)
        all_users = []
        for row in db_result:
            user = cls(row) 
            all_users.append(user)  
        return all_users
    
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users 
            (First_name, Last_name, Email)
            VALUES
            (%(First_name)s, %(Last_name)s, %(Email)s);
        """
        db_result = connectToMySQL("users_schema").query_db(query, data)
        return db_result
