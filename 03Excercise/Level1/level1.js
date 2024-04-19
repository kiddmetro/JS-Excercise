// QUESTION 1
const firstName = 'Ahmed';
const lastName = "Sule";
const country = 'Egypt';
const city = 'Cairo';
const age = 34;
const isMarried = false;
const year = 2020;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// QUESTION 2
const stringNum = '10';
const number = 10;
console.log(stringNum == number);

// QUESTION 3
let x = parseInt('9.8');
let y = 10;
console.log(x == y);

// QUESTION 4 

// TRUTHY VALUE
const truthyOne = "string";
const truthyTwo = 1;
const truthyThree = true;

// FALSY VALUE
const falsyOne = "";
const falsyTwo = false;
const falsyThree = null;

// QUESTION 5 
const firstQuestion = 4 > 3; //True
const secondQuestion = 4 >= 3; //True
const thirdQuestion = 4 < 3; //False
const fourthQuestion = 4 <= 3; //False
const fifthQuestion = 4 == 4; //True
const sixthQuestion = 4 === 4; //True
const seventhQuestion = 4 != 4; //False
const eigthQuestion = 4 !== 4; //False
const ninthQuestiion = 4 == '4'; //True
const tenthQuestion = 4 == '4'; //True
const eleventhQuestion = 4 === '4'; //False

console.log(firstQuestion);
console.log(secondQuestion);
console.log(thirdQuestion);
console.log(fourthQuestion);
console.log(fifthQuestion);
console.log(sixthQuestion);
console.log(seventhQuestion);
console.log(eigthQuestion);
console.log(ninthQuestiion);
console.log(tenthQuestion);
console.log(eleventhQuestion);

const randomWordOne = 'Python';
const randomWordTwo = 'Jargon';

const oneLen = randomWordOne.length;
const twoLen = randomWordTwo.length;
const compareLen = oneLen > twoLen;
console.log(compareLen);

// QUESTION 6
let a = 4 > 3 && 10 < 12; //True
let b = 4 > 3 && 10 > 12; //False
let c = 4 > 3 || 10 < 12; //True
let d = 4 > 3 || 10 > 12; //True
let e = !( 4 > 3); //False
let f = !(4 < 3); //True
let g = !(false); //True
let h = !( 4 > 3 && 10 < 12); //False
let i = !(4 > 3 && 10 > 12); //True

let onWordOne = 'Dragon';
let onWordTwo = 'Python';
console.log(onWordOne.includes("on"));
console.log(onWordTwo.includes("on"));

// QUESTION 7
const todayYear = new Date().getFullYear();
console.log(todayYear)

const todayMonth = new Date().getMonth();
console.log(todayMonth);

const todayDate = new Date().getDate();
console.log(todayDate);

const todayDay = new Date().getDay();
console.log(todayDay);

const todayHour = new Date().getHours();
console.log(todayHour);

const todayMinute = new Date().getMinutes();
console.log(todayMinute)

const numSec = Date.now();
console.log(numSec);
