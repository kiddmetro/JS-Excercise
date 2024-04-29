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
    let year = new Date().getFullYear();
    let date = new Date().getDate();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let showDate = `${month}/${date}/${year}`
    return showDate
}
console.log(showDateTime());