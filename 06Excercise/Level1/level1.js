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
let n = 5;

// Iterate from 0 to n using a for loop
for (let i = 0; i <= n; i++) {
    console.log(i);
}

// QUESTION 4

// Define the number of rows for the pattern
const numberOfRows = 7;

// Outer loop to iterate over each row
for (let i = 1; i <= numberOfRows; i++) {
    let pattern = '';

    // Inner loop to print '#' characters
    for (let j = 1; j <= i; j++) {
        pattern += '#';
    }

    // Print the pattern for each row
    console.log(pattern);
}
