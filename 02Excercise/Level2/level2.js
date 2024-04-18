// QUESTION 1
console.log("The Quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//QUESTION 2
console.log(" \"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

//QUESTION 3
let string = "10";
let number = 10;

let convertString = Number(string);
console.log(typeof number == typeof string);
console.log(convertString == number);

//QUESTION 4
let num = 10;
let convertFloat = parseFloat("9.8");
let round = Math.round(convertFloat);
console.log(round);
console.log(round == num);

//QUESTION 5 
let abWordOne = "python";
let abWordTwo = "Jargon";
console.log(abWordOne.includes("on"));
console.log(abWordTwo.includes("on"));

//QUESTION 6
let text = " I hope this course is not full of jargon";
console.log(text.includes("jargon"));

//QUESTION 7
let radNumOne = Math.floor(Math.random()* 100);
console.log(radNumOne);

//QUESTION 8
let randNumTwo = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(randNumTwo);

// QUESTION 9
let randNumThree = Math.floor((Math.random() * 255 ));
console.log(randNumThree);


// QUESTION 10
let rand = "Javascript";
let wordRandom = rand.length - 1;
let randomNum = Math.round(Math.random() * wordRandom);
console.log(rand.charAt(randomNum));
console.log(randomNum);

// QUESTION 11
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 ');

// QUESTION 12
let wordings = "You cannot end a sentence with because because because is a conjunction";
let wordSliceOne = wordings.substr(0, 30);
let wordSliceTwo = wordings.substr(54);
console.log(wordSliceOne + wordSliceTwo);







