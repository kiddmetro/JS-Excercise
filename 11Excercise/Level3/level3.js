const countries = require('../../09Excercise/Level2/countries_data');

// QUESTION 1

// for (const country of countries) {
//     const{name, capital,population, languages} = country;
//     console.log(name, capital, population, languages);
// }

// QUESTION 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [jsScore, reactScore]] = student;

console.log(`Name: ${name} | Skills: ${skills} | Js Score: ${jsScore} | React Score: ${reactScore}`)