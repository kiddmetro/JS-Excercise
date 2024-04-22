// QUESTION 1
const empArr = [];

// QUESTION 2
const eleArr = ['Hello', 'Morning', true , 24, 'Mind'];

//QUESTION 3
console.log(eleArr.length);

// QUESTION 4
console.log(eleArr[0]);
console.log(eleArr[2]);
console.log(eleArr[4]);

// QUESTION 5
const diffArr = ['34', true, false, 34, 'Esxpae', 5];
console.log(diffArr.length);

// QUESTION 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// QUESTION 7
console.log(itCompanies);

// QUESTION 8
console.log(itCompanies.length);

// QUESTION 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// QUESTION 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// QUESTION 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// QUESTION 12
console.log(itCompanies.toString());

// QUESTION 13
let anyCompany = 'ice';
if(itCompanies.includes(anyCompany)){
    console.log(anyCompany)
}
else{
    console.log("Company is Not Found")
}

// OR

const myCompany = 'Amazon';
const myCompanyIndex = itCompanies.indexOf(myCompany);
if(myCompanyIndex === -1){
    console.log(`Company is not Found`);
}else{
    console.log(myCompany);
}

// OR 

let index = itCompanies.indexOf('banana')  

if(index === -1){
   console.log('This Company does not exist in the array')  
} else {
    console.log(index);
}

// QUESTION 14
const filteredCompanies = [];

if (itCompanies[0].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[0]);
}

if (itCompanies[1].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[1]);
}

if (itCompanies[2].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[2]);
}

if (itCompanies[3].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[3]);
}

if (itCompanies[4].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[4]);
}

if (itCompanies[5].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[5]);
}

if (itCompanies[6].split('o').length - 1 <= 1) {
    filteredCompanies.push(itCompanies[6]);
}

console.log(filteredCompanies);


// QUESTION 15
console.log(itCompanies.sort());

// QUESTION 16
console.log(itCompanies.reverse());

// QUESTION 17
console.log(itCompanies.slice(0,3));

// QUESTION 18
console.log(itCompanies.slice(4));

// QUESTION 19
console.log(itCompanies.slice(3,4));

// QUESTION 20
const remFirst = itCompanies.shift()
console.log(itCompanies);

// QUESTION 21
const remMiddle = itCompanies.splice(2,2);
console.log(itCompanies);

// QUESTION 22
const remLast = itCompanies.pop();
console.log(itCompanies);

// QUESTION 23
const remAll = itCompanies.splice(0,7);
console.log(itCompanies);
