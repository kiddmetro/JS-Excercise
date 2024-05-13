// QUESTION 1
const dog = {};

// QUESTION 2
// console.log(dog);

// QUESTION 3

dog.name = 'Rock',
dog.legs = 4,
dog.color = 'White',
dog.age = 23,
dog.bark = function(){
    return'woof woof'
}

console.log(dog);

// QUESTION 4
let name = dog.name;
let legs = dog.legs;
let color = dog.color;
let age = dog.age;
let bark = dog.bark();


console.log("Name:", name);
console.log("Legs:", legs);
console.log("Color:", color);
console.log("Age:", age);
console.log("Bark:", bark);


// QUESTION 5
dog.breed = "Golden Retriever";

dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs and is ${this.age} years old. When it barks, it says "${this.bark()}".`;
};

console.log(dog);


