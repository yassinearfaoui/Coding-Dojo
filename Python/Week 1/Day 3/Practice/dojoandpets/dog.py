from pet import Pet 

class dog(Pet) :
    def __init__(self, name, tricks):
        super().__init__(name, "dog", tricks)

Dog1 = dog("mohsen",["yorged" , "yzidyorged"])
cat=dog("hmed",["zaama zaama" , " w natar"])

print(Dog1.tricks)
print(Dog1.noise())

print(cat.tricks)
print(cat.noise())