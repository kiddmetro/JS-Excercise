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
    let empString = '';
    for(let j = 0; j <= 2; j++){
        let rgbString = '';
        for(let i = 0; i <= 0; i++){
            let random = Math.floor(Math.random() * 255);
            rgbString += random ;
        }
        empString += rgbString; 
        if (j < 2) {
            empString += ',';
        }
    }
    return `rgb(${empString})`;
}
console.log(rgbColorGenerator());


// QUESTION 3
