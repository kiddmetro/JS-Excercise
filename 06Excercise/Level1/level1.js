// QUESTION 1

// for(i=0; i <= 10; i++){
//   console.log(i);
// }

// let i = 0;
// while(i <= 10){
//   console.log(i);
//   i++;
// }

// do{
//   console.log(i);
//   i++;
// }while(i <= 10);

// QUESTION 2

// for(i=10; i>= 0; i--){
//   console.log(i);
// }

// let i = 10;

// while(i >= 0){
//   console.log(i);
//   i--;
// }

// do{
//   console.log(i);
//   i--;
// }while(i >= 0);


// QUESTION 3

// for(i=0; i>=0; i++){
//   // console.log(i);
// }

// Define the value of n
// let n = 5;

// Iterate from 0 to n using a for loop
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// QUESTION 4

// Define the number of rows for the pattern
// const numberOfRows = 7;

// // Outer loop to iterate over each row
// for (let i = 1; i <= numberOfRows; i++) {
//     let pattern = '';

//     // Inner loop to print '#' characters
//     for (let j = 1; j <= i; j++) {
//         pattern += '0';
//     }

//     // Print the pattern for each row
//     console.log(pattern);
// }


// QUESTION 5

// let rows = 10;

// for(let i=0; i<=10; i++ ){
//     console.log(`${i} x ${i} = ${i * i}`);
// };

// QUESTION 6
let rows = 10;
// let exponentOne = 2; 
// let exponentTwo = 3;
// for(let i = 0; i <= 10; i++){
    
//     console.log(i, Math.pow(i,exponentOne), Math.pow(i,exponentTwo)); 
// }

// // OR 

// let row = 10;
// for(let i=0; i<=10; i++ ){
//         console.log(i, i * i, i * i * i );
// };

// QUESION 7
//  let num = 100;
//  for(let i = 0; i <= num; i++){
//     let even = i % 2;
//     if(even === 0){
//         console.log(i);
//     }
//  }

//  QUESTION 8
// let num = 100;
// for(let i = 0; i<=num; i++){
//     let odd = i % 2;
//     if(odd >= 1){
//         console.log(i);
//     }
// }

// QUESTION 9
// let num = 100;


// for(let i = 0; i <=num ;i++){
//     let notPrime = false;
//     for(let j = 2; j <= i; j++){
//         if( i % j === 0 ){
//             notPrime = true;
//         }
//         if(notPrime === false){
//             console.log(i)
//         }
//     }
// }

// QUESTION 10
// let num = 100;
// let sum = 0;
// for(let i = 0; i <= num;i++){
//     sum = sum + i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// QUESTION 11

// let num = 100;
// let sumEven = 0;
// let sumOdd = 0;
//  for(let i = 0; i <= num; i++){
//     let even = i % 2;
//     if(even === 0){
//         sumEven = sumEven + i;
//     }

//     let odd = i % 2;
//         if(odd >= 1){
//             sumOdd = sumOdd + i;
//         }
    
//  }
//  console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)


// QUESTION 12
// const newArr = [];

// let num = 100;
// let sumEven = 0;
// let sumOdd = 0;
//  for(let i = 0; i <= num; i++){
//     let even = i % 2;
//     if(even === 0){
//         sumEven = sumEven + i;
        
//     }

//     let odd = i % 2;
//     if(odd >= 1){
//         sumOdd = sumOdd + i;
//     }
    
//  }
//  let addOne = newArr.push(sumEven);
//  let addTwo = newArr.push(sumOdd);

//  console.log(newArr)


//  QUESTION 13
// const empArr =[]

// let num = 5;

// for(let i = 1; i <= num;i++ ){
//     let randomNum = Math.floor(Math.random() * num);
//     let pushNum = empArr.push(randomNum);
// }
// console.log(empArr)


// QUESTION 14
// const empArr =[]

// let num = 4;

// for(let i = 0; i <= num ;i++ ){
//     let randomNum = Math.round(Math.random() * 1000 );
//     let pushNum = empArr.push(randomNum);
// }
// console.log(empArr)

// QUESTION 15
let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let empString = ''
let num = 6;

for(let i = 1; i <= num; i++){
    let randString = string.length-1;
    let generate = Math.floor(Math.random() * randString);
    let word = string.charAt(generate);
    empString = generate+empString;
}
console.log(empString.toLowerCase());





// QUESTION 10 INCOMPLETE 