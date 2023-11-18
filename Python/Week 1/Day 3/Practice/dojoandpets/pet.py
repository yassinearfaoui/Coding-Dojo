
class Pet:
    def __init__(self,name,type,tricks):
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=100
        self.energy=100

    def sleep(self):
        self.energy += 25
        return self.energy



    def eat(self):
        self.energy+=5   
        self.health+=10
        return self.health

    def play(self):
        self.health+=5
        return self.health

    def noise(self):
        if(self.type == "dog"):
            
            return ("woof !")
        elif(self.type == "cat"):    
            return ("MEOWWWW !")  
        else:
            return ("waywaaa !")
            



pet1 = Pet("fluffy","dog",["sit , roll over"])

# print(pet1.sleep())
# print(pet1.noise())
print(pet1.eat())
# print(pet1.play())
# print(pet1.tricks)




# pockoemon=Pet("poekimon","cat","transform")

# user=Ninja("Jack","Mack","Sack","meat",pockoemon)