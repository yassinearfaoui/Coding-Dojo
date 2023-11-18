from pet import Pet

class Ninja:
    def __init__(self,first_name, last_name,treats,pet_food,pet):
        self.first_name=first_name
        self.last_name=last_name
        self.treats=treats
        self.pet_food=pet_food
        self.pet=pet

    def walk(self):
        self.pet.play()
        return self.pet.play()
    

    def feed(self):
        self.pet.eat()
        return self.pet.eat()

    def bathe(self):
        self.pet.noise()
        return self.pet.noise()
        

Ninja1 = Ninja("jhon","doe",10,5, Pet("fluffy","dog",["sit","roll over"]))

print(Ninja1.bathe())
print(Ninja1.feed())
print(Ninja1.walk())
