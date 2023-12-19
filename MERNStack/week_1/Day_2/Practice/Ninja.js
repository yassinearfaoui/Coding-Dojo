class ninja {
    constructor(name){
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }
    
    sayname(){
        return this.name
    }

    showsstats(){
        return this
    }

    drinkSake(){
        this.health += 10
        return this.health
    }
}

const ninja1 = new ninja("yassine");
console.log(ninja1);
console.log(ninja1.sayname())
console.log(ninja1.drinkSake())
console.log(ninja1.showsstats());
