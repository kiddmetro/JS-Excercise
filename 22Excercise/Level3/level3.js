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

// Loop through each challenge in challengeInfo.challenges
challengeInfo.challenges.forEach(challenge => {
    // Create a div for each challenge
    const challengeDiv = document.createElement('div');
    challengeDiv.className = 'challenge';

    // Create and append the challenge name as a header
    const challengeName = document.createElement('h3');
    challengeName.textContent = challenge.name;
    challengeDiv.appendChild(challengeName);

    // Create and append the challenge status as a paragraph
    const challengeStatus = document.createElement('p');
    challengeStatus.textContent = `Status: ${challenge.status}`;
    challengeDiv.appendChild(challengeStatus);

    // Create a details tag to hold the topics
    const detailsTag = document.createElement('details');
    const summaryTag = document.createElement('summary');
    summaryTag.textContent = 'Topics';
    detailsTag.appendChild(summaryTag);

    // Loop through each topic and add it to the details tag
    challenge.topics.forEach(topic => {
        const topicItem = document.createElement('p');
        topicItem.textContent = topic;
        detailsTag.appendChild(topicItem);
    });

    // Append the details tag to the challengeDiv
    challengeDiv.appendChild(detailsTag);

    challengeDiv.style.display = 'flex';
    challengeDiv.style.justifyContent = 'space-between'
    challengeDiv.s

    // Finally, append the challengeDiv to the wrapper div
    getDivId.appendChild(challengeDiv);
});


const getFirstDiv = document.getElementsByClassName('challenge')[0];
getFirstDiv.style.background = 'black'
