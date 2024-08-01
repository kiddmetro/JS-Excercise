const destructureObject = (obj) => {
  const {
    description,
    challengeTitle,
    challengeSubtitle,
    challengeYear,
    challenges,
    keywords,
    author
  } = obj;
  return {
    description,
    challengeTitle,
    challengeSubtitle,
    challengeYear,
    challenges,
    keywords,
    author
  };
};

console.log(destructureObject(challengeInfo));


// Body Styling
const getBody =  document.getElementsByTagName('body')[0];

getBody.style.width = 'auto';
getBody.style.height = '100vh';
getBody.style.display = 'flex';
getBody.style.justifyContent = 'center';

// Div Wrapper Styling
const getDivId = document.getElementsByClassName('wrapper')[0];
getDivId.style.justifyContent = 'center';
getDivId.style.textAlign = 'center';

// Header(H1) JS code and Styling
const createHeaderOne = document.createElement('h1');
createHeaderOne.innerHTML = challengeInfo.description + ` <span id="year">${challengeInfo.challengeYear}</span>`;
getDivId.appendChild(createHeaderOne);

const getYearId = document.getElementById('year');
getYearId.style.fontSize = '1.5em';
getYearId.style.fontFamily = 'Arial';

function getRandomColors(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

setInterval(function(){
    getYearId.style.color = getRandomColors();
}, 1000);


// Headers(H2) Js and Styling
const createHeaderTwo = document.createElement('h2');
createHeaderTwo.style.fontFamily = 'Arial';
createHeaderTwo.style.fontSize = '1em';
createHeaderTwo.style.fontWeight = 'normal';
createHeaderTwo.style.textDecoration = 'underline';
createHeaderTwo.innerHTML = challengeInfo.challengeSubtitle;
getDivId.appendChild(createHeaderTwo);

// Paragraph that contains timer 
const timerParagraph = document.createElement('p');

const createTime = setInterval(function(){
    const getTime = new Date().toLocaleTimeString();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-us',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );
    timerParagraph.style.background = getRandomColors();
    timerParagraph.style.padding = '10px';
    timerParagraph.style.margin = '0 200px'
    timerParagraph.style.fontWeight = '800';
    let timer = `${formattedDate} ${getTime}`;
    return timerParagraph.innerHTML = timer;
},1000) 


getDivId.appendChild(timerParagraph);

// The Tasks styling and Js

// const destructChallenges = challengeInfo.challenges.map((challenge) => {
//     return {
//         challengeTitle: challenge.name,
//         challengeSubtitle: challenge.challengeSubtitle,
//         challengeYear: challenge.challengeYear,
//         challenges: challenge.challenges,
//         keywords: challenge.keywords,
//         author: challenge.author
//     }
// })
// console.log(destructChallenges);

let createDivTag;

for(let i = 0; i < challengeInfo.challenges.length; i++){
   createDivTag = document.createElement('div');  
   createDivTag.className = 'topics';
   createDivTag.textContent = challengeInfo.challenges[i];
   getDivId.appendChild(createDivTag)
}

console.log(createDivTag)
