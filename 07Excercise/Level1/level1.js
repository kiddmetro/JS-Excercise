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

// QUESTION 7
 areaOfCircle = (r) =>{
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(5));

// QUESTION 8
circumOfCircle = (r) => {
  let circum = 2*Math.PI*r;
  return circum;
}
console.log(circumOfCircle(2));

// QUESTION 9
density = (mass,volume) => {
  let density = mass/volume;
  return density;
}
console.log(density(10,10));

// QUESTION 10
function speed(){
  let distance = 100;
  let time = 3.5;
  let speed = distance/time;
  return speed;
}
console.log(speed());

// QUESTION 11
weight = (mass,gravity) => {
  let weight = mass * gravity;
  return weight;
}
console.log(weight(10,4));

// QUESTION 12
function convertCelciustoFahrenheit(oC) {
  let oF = (oC * 9/5) + 32;
  return oF;
}
console.log(convertCelciustoFahrenheit(34));

// QUESTION 13
BMI = (weight,height) => {
  let BMI = weight/(height*height);
  if(BMI < 18.5){
    return `Under Weight: BMI is less than 18.5`;
  }
  else if(BMI >= 18.5 && BMI <= 24.9){
    return `Normal Weight: BMI is 18.5 to 24.9`;
  } 
  else if(BMI >= 25 && BMI <= 29.9){
    return `Over Weight: BMI is 25 to 29.9`;
  }
  else if(BMI >= 30 && BMI <=43){
    return `Obese: BMI  is 30 or more`;
  }
  else{
    return `Extremely Fat`;
  }
}

console.log(BMI(5940,5));

// QUESTION 14
checkSeason = (month) => {
  if(month === 'December' || month === 'January' || month === 'February'){
    return 'Winter';
  }
  else if(month === 'March' || month === 'April' || month === 'May'){
    return 'Autumn';
  }
  else if(month === 'June' || month === 'July' || month === 'August'){
    return 'Spring';
  }
  else if(month === 'September' || month === 'October' || month === 'November'){
    return 'Autumn';
  }
  else {
    return 'No Month';
  }
  
}
console.log(checkSeason('October'));

// QUESTION 14

function findMax(...args){
  let max = args[0];
  for(i = 0; i <= args.length; i++){
    if(args[i] > max){
      max = args[i];
    }
  }
  return max;
}

console.log(findMax(10,20))