class ninja {
    constructor(name) {
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayname() {
        return this.name
    }

    showsstats() {
        return this
    }

    drinkSake() {
        this.health += 10
        return this
    }
}
class sensei extends ninja {
    constructor(name , health,speed,strength ) {
        super(name,health,speed,strength)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom(){
        this.drinkSake()
        const wisdom = "What one programmer can do in one month, two programmers can do in two months."
        return  wisdom
    }
}

const superSensei = new sensei("Master Splinter");

console.log(superSensei.speakWisdom())
console.log(superSensei.showsstats())