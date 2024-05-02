// QUESTION 1

let string = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let numChar = parseInt(prompt("Number of Characters"));
let numId = parseInt(prompt("Number of Ids"));

function userIdGeneratedByUser() {
    let empString = '';
    for (let j = 0; j < numId; j++) {
        let tempString = '';
        for (let i = 0; i < numChar; i++) {
            let stringLen = string.length;
            let generate = Math.floor(Math.random() * stringLen);
            let random = string.charAt(generate);
            tempString += random;
        }
        empString += tempString + '\n';
    }
    return empString;
}

console.log(userIdGeneratedByUser());



// QUESTION 2


