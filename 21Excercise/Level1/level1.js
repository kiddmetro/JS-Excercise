// QUESTION 1
const firstTag = document.querySelector('p');
console.log(firstTag);

// QUESTION 2
const getFirstId = document.querySelector('#paragraph-one');
console.log(getFirstId);

const getSecondId = document.querySelector('#paragraph-two');
console.log(getSecondId);

const getThirdId = document.querySelector('#paragraph-three');
console.log(getThirdId);

const getFourthId = document.querySelector('#paragraph-four');
console.log(getFourthId);

// QUESTIION 3
const getAllId = document.querySelectorAll('p');
console.log(`Console as Node List:`,getAllId);

// QUESTION 4
for (let i = 0; i <getAllId.length; i++) {
    let getTextContent = getAllId[i].textContent;
    console.log(`For Loop to get Text Content:`,getTextContent);
}

// QUESTION 5
getFourthId.textContent = `Fourth Paragraph`;