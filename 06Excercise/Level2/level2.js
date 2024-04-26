// QUESTION 1

// let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let empString = ''
// let randNum = Math.floor(Math.random() * (20 - 10 + 1) + 10)


// for(let i = 0; i <= randNum; i++){
//     let stringLen = string.length -1;
//     let generate = Math.floor(Math.random() * stringLen );
//     let random = string.charAt(generate);
//     empString = random+empString;
// }
// console.log(empString.toLowerCase());

// QUESTION 2
// let string = '0123456789ABCDEF';
// let empString = '';
// let num =5 ;
// let randNum = Math.floor(Math.random() * num);


// for(let i = 0; i <= num; i++){
//     let stringLen = string.length -1;
//     let generate = Math.floor(Math.random() * stringLen);
//     let random = string.charAt(generate);
//     empString = random+empString;
// }
// console.log(`#${empString.toLowerCase()}`);

// QUESTION 3
let rgbNum = 255;

for(let i = 1; i <= 1; i++){
    let a = Math.floor(Math.random() * rgbNum);
    let b = Math.floor(Math.random() * rgbNum);
    let c = Math.floor(Math.random() * rgbNum);
    console.log(`rgb(${a},${b},${c})`)

}


// QUESTION 4 & 5
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

// const newArr = [];
// const newArrTwo = [];
// for (const country of countries) {
//     newArr.push(country.toUpperCase());
//     newArrTwo.push(country.length);
// }
// console.log(newArr);
// console.log(newArrTwo);


// QUESTION 6

// const newArr = [];
// for (const country of countries) {
//     let fullCountry = country.split();
//     let halfCountry = country.slice(0,3)
//     newArr.push(fullCountry);
//     fullCountry.push(halfCountry.toUpperCase());
//     fullCountry.push(country.length);
// }
// console.log(newArr);


// QUESTION 7

// const newArr = [];
// for (const country of countries){
//     const word = country.includes('land');
//     if(word){
//         let push = newArr.push(country);
//     }
//     else{
//        console.log(`All these countries are without land`)
//     }
     
   
// }

// console.log(newArr)

// QUESTION 8
// const newArr = [];
// for (const country of countries){
//     const word = country.includes('ia');
//     if(word){
//         let push = newArr.push(country);
//     }
//     else{
//        console.log(`All these countries are without ia`)
//     }
     
   
// }

// console.log(newArr)

// QUESTION 9
const empString = '';
for (const country of countries) {
   let fullCountry = (country.length);
    let countyChar = country.slice(0,fullCountry);
    let iterate = countyChar <= fullCountry;
        console.log(countyChar);
}
// console.log(empString);













// QUESTION 8 & 9 ARE QUESTIONABLE TRY AND RESOLVE