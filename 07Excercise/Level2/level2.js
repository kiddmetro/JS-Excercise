// QUESTION 1

function solveLinEquation(a, b, c){

} 


// QUESTION 2
function solveQuadEquation(a, b, c,){

}

// QUESTION 3
let newArr = []
printArray = (...arr) => {
    return arr;
}
console.log(printArray(2,1,3,4));

// QUESTION 4
function showDateTime(){
    let month = new Date().getMonth();
    if(month < 10){
        ctrlMonth = '0'+ month;
    }
    else{
        ctrlMonth = month;
    }
    let date = new Date().getDate();
    if(date < 10){
        ctrlDate = '0'+ date;
    }
    else{
        ctrlDate = date;
    }
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    if(hours < 10){
        ctrlHours = '0'+ hours;
    }
    else{
        ctrlHours = hours;
    }
    let minutes = new Date().getMinutes();
    if(minutes < 10){
        ctrlMinutes = '0'+ minutes;
    }
    else{
        ctrlMinutes = minutes;
    }
    let showDate = `${ctrlMonth}/${ctrlDate}/${year} ${ctrlHours}:${ctrlMinutes}`
   
    return showDate
}
console.log(showDateTime());

// QUESTION 5
function swapValues(x,y){
   let swapX = x;
   let swapY = y;
   swapX = y;
   swapY = x;
   return `x => ${swapX}, y => ${swapY}`
}
console.log(swapValues(3,4))
console.log(swapValues(4,5))

// QUESTION 6
function reverseArray(arr){
    let newArr = [];
    for( i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr

} 

console.log(reverseArray([1, 2, 3, 4, 5]));

// QUESTION 7
function capitalizedArray(arr){
    let cArr = [];
    for (const array of arr) {
        cArr.push(array.toUpperCase());
    }
    return cArr;
}
console.log(capitalizedArray(['a','b','c']));

// QUESTION 8
function addItem(item){
    let newArr = ['a','b','c'];
    newArr.push(item);
    return newArr;
}
console.log(addItem('d'));

// QUESTION 9
function removeItem(index){
    let newArr = ['a','b','c','d'];
    newArr.splice(index,1);
    return newArr;
}
console.log(removeItem(2));

// QUESTION 10
function sumOfNumbers(numOne,numTwo){
    // let max = Math.max(numOne, numTwo);
    // let min = Math.min(numOne, numTwo);
   
    // let sum = 0;
    // for (let i = min; i <= max ; i++) {
    //   sum += i;
    // }
    // return sum;
    // FOR WHEN THE RANGE IS SCATTERED 

     let sum = 0;
    for (let i = numOne; i <= numTwo ; i++) {
      sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(4,5));

// QUESTION 11
function sumOfOdds(numOne,numTwo){
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++){
        if(i % 2 === 1){
            sum += i;
        }
    }
    return sum;

}
console.log(sumOfOdds(1,5));

// QUESTION 12
function sumOfEven(numOne,numTwo){
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++){
        if(i % 2 !== 1){
            sum += i;
        }
    }
    return sum;

}
console.log(sumOfEven(1,5));


// QUESTION 13
function evensAndOdds(integer){
    let odd = 0;
    let even = 0;
    for(i = 0; i <= integer; i++){
        if(i % 2 === 1){
            odd++;
        }
        if(i % 2 !== 1){
            even++;
        }
    }
    return `The number of odds are ${odd}\nThe number of evens are ${even}`;

}
console.log(evensAndOdds(24));

// QUESTION 14
function sumArg(...arg){
    let sum = 0;
    for(i = 0; i <= arg.length; i++ ){
        sum += i;
    }
    return sum;
}

console.log(sumArg(1, 2, 3, 4));

// QUESTION 15
const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

console.log(randomIp());

// QUESTION 16




// QUESTION 17

function randomHexaNumberGenerator(){
    let string = '0123456789ABCDEF';
    let empString = '';
    let num =5 ;


    for(let i = 0; i <= num; i++){
        let stringLen = string.length -1;
        let generate = Math.floor(Math.random() * stringLen);
        let random = string.charAt(generate);
        empString = random+empString;
    }
    return(`#${empString.toLowerCase()}`);
}
console.log(randomHexaNumberGenerator());


// QUESTION 18

function userIdGenerator(){
    let string = '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let empString = '';
    let num =6 ;


    for(let i = 0; i <= num; i++){
        let stringLen = string.length -1;
        let generate = Math.floor(Math.random() * stringLen);
        let random = string.charAt(generate);
        empString = random+empString;
    }
    return(`${empString}`);
}
console.log(userIdGenerator());



// QUESTION 1 2 and 16 NOT SOLVED