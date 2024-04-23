// QUESTION 1

const countries = require("./countries");
const web_tech = require("./web_tech");


// QUESTION 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(" ");
console.log(words);
console.log(words.length);

// QUESTION 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let add = shoppingCart.unshift('Meat');
let addTwo = shoppingCart.push('Sugar');
let remove = shoppingCart.splice(4,1);
let change = shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// QUESTION 4

let check = 'Ethiopia';
let checkTwo = countries.indexOf(check);

if(checkTwo === -1){
    let checkAdd = countries.push(check)
    console.log(countries)
}
else{
    console.log(check.toUpperCase());
}

// QUESTION 5
let checkSass = 'Sass';
let checker = web_tech.indexOf(checkSass);

if(checker === -1){
    let addSass = web_tech.push(checkSass);
    console.log(web_tech);
}
else{
    console.log(`Sass is a CSS preprocess`);
}

// QUESTION 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


