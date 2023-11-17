class Ninja :
    def __init__(self,first_name, last_name,treats,pet_food,pet):
        self.first_name=first_name
        self.last_name=last_name
        self.treats=treats
        self.pet_food=pet_food
        self.pet=pet

    def walk(self):
        self.pet.play()
        

    def feed(self):
        
        self.pet.eat()

    def bathe(self):
        self.pet.noise()
        
    def display(self):
        print(self.pet)


class Pet:
    def __init__(self,name,type,tricks):
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=0
        self.energy=0

    def sleep(self):
        self.energy += 25

    def eat(self):
        self.energy+=5   
        self.health+=10

    def play(self):
        self.health+=5

    def noise(self):
        print("MEOWWWW")   


pockoemon=Pet("poekimon","cat","transform")

user=Ninja("Jack","Mack","Sack","meat",pockoemon)