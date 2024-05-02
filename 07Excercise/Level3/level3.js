// QUESTION 1

let string = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv0123456789';
let empString = ''
let numChar = prompt("Number of Characters");
let numId = prompt("Number of Ids");

function userIdGeneratedByUser(){
    for(let i = 0; i <= numChar; i++){
        let stringLen = string.length -1;
        let generate = Math.floor(Math.random() * stringLen);
        let random = string.charAt(generate);
        empString = random+empString;     
    }
    return empString;
}

console.log(userIdGeneratedByUser())


// QUESTION 2





// QUESTION 1 IN COMPLETE