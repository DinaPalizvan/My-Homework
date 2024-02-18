//todo1 create a Pet class that accepts petName, weight, age, color
//todo2 create a Cat class that inherits it's properties from Pet
//todo3: in the Cat class, add another property called breed
//todo4: Add two methods to the Cat class:
//  - Create a method named "sound" that logs the cat's sound to the console.
//  - Implement a method called "game" that returns "[pet-name] is playing with a rubber ball."

// ! Answer =====================================================================
class Pet{
    constructor(petName, weight, age, color){
        this.perName=petName;
        this.weight=weight;
        this.age=age;
        this.color=color
    }
}

class Cat extends Pet{
    constructor(petName, weight, age, color, breed){
        super(petName, weight, age, color)
        this.breed=breed
    }
    sound(){
        return "meow";
    }
    game(){
        return `${this.perName} is playing with a rubber ball.`
    }
}

const test= new Cat("Barfi", "3kg", 3, "white", "persian" )
console.log(test.game());