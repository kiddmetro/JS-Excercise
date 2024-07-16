// QUESTION 1

const countriesArray = require('../../05Excercise/Level2/countries')
const countriesObject= require('../../09Excercise/Level2/countries_data')

console.table(countriesArray);
console.table(countriesObject);

console.group('Countries in Array');
countriesArray.forEach(element => {
  console.log(element);
});
console.groupEnd();

console.group('Countries in Object');
console.log(countriesObject);
console.groupEnd();