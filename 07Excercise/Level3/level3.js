// QUESTION 1

// let string = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let numChar = parseInt(prompt("Number of Characters"));
// let numId = parseInt(prompt("Number of Ids"));

// function userIdGeneratedByUser() {
//     let empString = '';
//     for (let j = 0; j < numId; j++) {
//         let tempString = '';
//         for (let i = 0; i < numChar; i++) {
//             let stringLen = string.length;
//             let generate = Math.floor(Math.random() * stringLen);
//             let random = string.charAt(generate);
//             tempString += random;
//         }
//         empString += tempString + '\n';
//     }
//     return empString;
// }

// console.log(userIdGeneratedByUser());



// QUESTION 2

function rgbColorGenerator(){
    // let empString = '';
    // for(let j = 0; j <= 2; j++){
    //     let rgbString = '';
    //     for(let i = 0; i <= 0; i++){
    //         let random = Math.floor(Math.random() * 255);
    //         rgbString += random ;
    //     }
    //     empString += rgbString; 
    //     if (j < 2) {
    //         empString += ',';
    //     }
    // }
    // return `rgb(${empString})`;

    let newArray = [];
    let random = Math.floor(Math.random() * 255 );
    for(let j = 0; j < random; j++){
        let rgbString = '';
        for(let i = 0; i <= 0; i++){
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);

            rgbString = 'rgb' + '('+ red + ',' + blue + ',' + green +')';
        }
    newArray.push(rgbString);

    }
    return newArray;
}
console.log(rgbColorGenerator());





// QUESTION 3

const arrayOfHexaColors = () => {
    const hexaString = '0123456789ABCDEF';
    let num = Math.round(Math.random() * 500)
    const newArray = [];

    for (let j = 0; j < num; j++) {
        let newString = '';

        for (let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random() * hexaString.length);
            const generateHex = hexaString.charAt(random);
            newString += generateHex.toLowerCase();
        }

        newArray.push('#' + newString);
    }

    const chunkedArray = [];
    for (let i = 0; i < newArray.length; i += num) {
        chunkedArray.push(newArray.slice(i, i + num));
    }

    return chunkedArray;
}

console.log(arrayOfHexaColors());

// QUESTION 4
arrayOfRgbColors = () =>{
    let newArray = []
    let empString = '';
    for(let j = 0; j <= 2; j++){
        let rgbString = '';
        for(let i = 0; i <= 0; i++){
            let random = Math.floor(Math.random() * 255);
            rgbString += random ;
        }
        empString +=  rgbString; 
        if (j < 2) {
            empString += ',';
        }
        // newArray.push(empString);
    }
    const chunkedArray = [];
    for (let i = 0; i < newArray.length; i += 4) {
        chunkedArray.push(newArray.slice(i, i + 4));
    }

    // return chunkedArray;
    return empString;

}
console.log(arrayOfRgbColors());


// QUESTION 5

const convertHexaToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
}

console.log(convertHexaToRgb("#50068F"));

// QUESTION 6

const convertRgbToHexa = (r,g,b) => {
    let rgbR = Math.floor(r/16);
    rgbR? rgbR = rgbR.toString(16) : rgbR = rgbR;
    let rgbG = Math.floor(g/16);
    rgbG? rgbG = rgbG.toString(16) : rgbG = rgbG;
    let rgbB = Math.floor(b/16);
    rgbB? rgbB = rgbB.toString(16) : rgbB = rgbB;

    let rgbR1 = r/16;
    r < 16 ? rgbR1 =( (Math.abs(rgbR - rgbR1)) * 16 ).toString(16) : rgbR1 = (r%16).toString(16);
    let rgbG1 = g/16;
    g < 16 ? rgbG1 =( (Math.abs(rgbG - rgbG1)) * 16).toString(16) : rgbG1 = (g%16).toString(16);
    let rgbB1 = b/16;
    b < 16 ? rgbB1 =(( Math.abs(rgbB - rgbB1)) * 16).toString(16) : rgbB1 = (b%16).toString(16);
    let rgb = '#'+rgbR+rgbR1+rgbG+rgbG1+rgbB+rgbB1;
    return rgb;
}

console.log(convertRgbToHexa(199,86,220));


// QUESTION 7

const generateColors = (color,num) => {
    if(color === 'hexa'){
        const hexaString = '0123456789ABCDEF';
        let newArray = [];
        for (let j = 0; j < num; j++) {
            let newString = '';
    
            for (let i = 0; i < 6; i++) {
                const random = Math.floor(Math.random() * hexaString.length);
                const generateHex = hexaString.charAt(random);
                newString += generateHex.toLowerCase();
            }
    
            newArray.push('#' + newString);
        }
        return newArray
    }
    if(color = 'rgb'){
        let newArray = [];
        for(let j = 0; j < num; j++){
            let rgbString = '';
            for(let i = 0; i <= 0; i++){
                let red = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);

                rgbString = 'rgb' + '('+ red + ',' + blue + ',' + green +')';
            }
        newArray.push(rgbString);

        }
        return newArray;
    }
}

console.log(generateColors('hexa', 8));


// QUESTION 8
let newArray = [];
const shuffleArray = (array) =>{
    for(let i = 0; i <= 0; i++){
        let random = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
}
const numbers = [1, 2, 3, 4, 5];

console.log(shuffleArray(numbers));

// QUESTION 9
function factorial (num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial(10));

// QUESTIION 10
const isEmpty = (param) => {
    if(param ===null || param === undefined || param === ''){
        return true;
    }else{
        return param;
    }
}
console.log(isEmpty('Bab'));

// QUESTION 11
const sum = (...arg) => {
    let sum = 0;
    for(let i = 0; i < arg.length;i++){
        sum += arg[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4))

// QUESTION 12
