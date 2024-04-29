// QUESTION 1
// const myFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// }

// console.log(myFullName('Clinton', 'Igwe'));

// QUESTION 2
function myFullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}

console.log(myFullName('Clinton', 'Igwe'));

// QUESTION 3
function addNumbers(numOne, numTwo){
  return numOne + numTwo;
}
console.log(addNumbers(2,3));

// QUESTION 4
// function areaOfRectangle(length, width){
//   let area = length * width;
//   return area;
// }
// console.log(areaOfRectangle(5,10));

// QUESTION 5
// function perimeterOfRectangle(length, width){
//   let perimeter = 2 * (length * width);
//   return perimeter;
// }
// console.log(perimeterOfRectangle(5,10));

// QUESTION 6
function volumeOfRectPrism(length,width,height,...args){
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(4,4,4));