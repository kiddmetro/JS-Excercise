let countries = require('../Level2/countries');

// QUESTION 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortArr = ages.sort();
const maxAge = Math.max(...ages);
const minAge = Math.min(...ages);

console.log(sortArr);
console.log(maxAge);
console.log(minAge);


const arrLength = ages.length;
const findMiddle = Math.round(arrLength /2);
console.log(findMiddle);

const median = Math.round((24 + 25) /2);
console.log(median);

const sumArr = Math.round((19+19+20+22+24+24+24+25+25+26)/10);
console.log(`The Sum is ${sumArr}`);

const rangeArr = (maxAge - minAge);
console.log(rangeArr);

const minAve =minAge - sumArr;
const maxAve = maxAge - sumArr;

console.log(minAve)
console.log(maxAve)
console.log(maxAve < minAve); 

const minAveAbs = Math.abs(minAve);
console.log(minAveAbs);

const maxAveAbs = Math.abs(maxAve);
console.log(maxAveAbs);

// let firstTen = countries.splice(0,10);
// console.log(countries);

// QUESTION 2
const countrySep = countries.toString();
const count = countrySep.length;
// const middleCountry = Math.round(countryLen/2);
// const getCountry = countries[middleCountry];
console.log(countrySep);
console.log(count);