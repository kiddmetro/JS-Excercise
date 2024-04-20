// QUESTION 1

let num = prompt('Enter Score');
switch (true) {
    case num >= 80:
        console.log('A');
        break;
    case num >= 70:
        console.log('B');
        break;
    case num > 60:
        console.log('C');
        break;
    case num >= 50:
        console.log('D');
        break;
    case num >= 0:
        console.log('F');
        break;
}

//QUESTION 2

let userInput = prompt('Enter Month to find out the season we are in');
switch(userInput){
    case 'January':
        console.log('The Season is Winter');
        break;
    case 'February':
        console.log('The Season is Winter');
        break;
    case 'March':
        console.log('The Season is Spring');
        break;
    case 'April':
        console.log('The Season is Spring');
        break;
    case 'May':
        console.log('The Season is Spring');
        break;
    case 'June':
        console.log('The Season is Summer');
        break;
    case 'July':
        console.log('The Season is Summer');
        break;
    case 'August':
        console.log('The Season is Summer');
        break;
    case 'September':
        console.log('The Season is Autumn');
        break;
    case 'October':
        console.log('The Season is Autumn');
        break;
    case 'November':
        console.log('The Season is Autumn');
        break;
    case 'December':
        console.log('The Season is Winter');
        break;
}