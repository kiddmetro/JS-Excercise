class Animal {
    constructor(name, age, color, legs, type, sound) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.type = type;
        this.sound = sound;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    toString() {
        return `${this.name} is ${this.age} years old`;
    }
}

// const dog = new Animal('Dog', 5, 'brown', 4, 'dog', 'woof');
const cat = new Animal('Cat', 2, 'white', 4, 'cat','meow');

// console.log(dog);
console.log(cat);

console.log(cat.toString());

class Dog extends Animal {
    constructor(name, age, color, legs, type, sound, breed) {
        super(name, age, color, legs, type, sound);
        this.breed = breed;
    }

    // Override toString method
    toString() {
        return `${this.name} (${this.breed}) is a ${this.age} years old dog`;
    }
}

const dog = new Dog('Rex', 5, 'brown', 4, 'dog', 'woof', 'Golden Retriever');
console.log(dog); 

