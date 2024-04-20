// QUESTION 1
/*const numAge = prompt("Enter Your Age");
const reqAge = 18 - numAge;

if(numAge > 18){
  console.log('You are old enough to drive');
}
else{
  console.log(`You are left with ${reqAge} years to drive`);
}*/

// QUESTION 2
/*const myAge = prompt("Enter My Age");
const yourAge = prompt("Enter Your Age");
const ageDiffOne = myAge-yourAge;
const ageDiffTwo = yourAge-myAge;

if(myAge > yourAge){
  console.log(`Me i am older than you with ${ageDiffOne} years`);
}
else{
  console.log(`You are Older than me with ${ageDiffTwo} years`);
}*/

// QUESTION 3
let a = 4;
let b = 3;

if (a > b){
  console.log(`${a} is greater than ${b}`);
}
else{
  console.log(`${a} is less than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// QUESTION 4
const num = prompt("Enter a Number");
const check = num % 2;
if(check > 0){
  console.log(`${num} is an Odd Number`);
}
else{
  console.log(`${num} is an Even Number`);
}