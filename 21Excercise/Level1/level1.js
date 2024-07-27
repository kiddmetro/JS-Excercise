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

// QUESTION 6

// getFirstId.setAttribute('id','first-paragraph');
// getFirstId.setAttribute('class','set-paragraph');
// console.log(`Change of ID first paragraph:`,getFirstId);

// getFirstId.id = 'first-paragraph';
// getFirstId.className = 'set-paragraph';
// console.log(`Change of ID first paragraph:`,getFirstId);


// getSecondId.setAttribute('id','second-paragraph');
// getSecondId.setAttribute('class','set-paragraph');
// console.log(`Change of ID second paragraph:`,getSecondId);

// getSecondId.id = 'second-paragraph';
// getSecondId.className = 'set-paragraph';
// console.log(`Change of ID second paragraph:`,getSecondId);

getThirdId.setAttribute('id','third-paragraph');
getThirdId.setAttribute('class','set-paragraph');
console.log(`Change of ID third paragraph:`,getThirdId);

// getThirdId.id = 'third-paragraph';
// getThirdId.className = 'set-paragraph';
// console.log(`Change of ID third paragraph:`,getThirdId);

getFourthId.setAttribute('id','fourth-paragraph');
getFourthId.setAttribute('class','set-paragraph');
console.log(`Change of ID fourth paragraph:`,getFourthId);

// getFourthId.id = 'fourth-paragraph';
// getFourthId.className = 'set-paragraph';
// cconsole.log(`Change of ID fourth paragraph:`,getFourthId);
