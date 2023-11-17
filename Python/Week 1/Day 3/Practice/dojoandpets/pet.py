
class Pet:
    def __init__(self,name,type,tricks):
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=100
        self.energy=100

    def sleep(self):
        self.energy += 25


    def eat(self):
        self.energy+=5   
        self.health+=10

    def play(self):
        self.health+=5

    def noise(self):
        if(self.pet_type == "dog"):
            print("woof !")
        elif(self.pet_type == "cat"):    
            print("MEOWWWW !")  
        else:
            print("waywaaa !")



pet = Pet("fluffy","dog",["sit , roll over"])




# pockoemon=Pet("poekimon","cat","transform")

# user=Ninja("Jack","Mack","Sack","meat",pockoemon)