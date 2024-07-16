// QUESTION 1

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

const dog = new Animal('Dog', 5, 'brown', 4, 'dog', 'woof');
const cat = new Animal('Cat', 2, 'white', 4, 'cat','meow');

console.log(dog);
console.log(cat);

console.log(dog.toString());
console.log(cat.toString());