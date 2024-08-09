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


// Creating the Challenge Elements
challengeInfo.challenges.forEach(challenge => {
    // Create a div for each challenge
    const challengeDiv = document.createElement('div');
    challengeDiv.className = 'challenge';

    // Create and append the challenge name as a header
    const challengeName = document.createElement('h3');
    challengeName.textContent = challenge.name;
    challengeDiv.appendChild(challengeName);
    // styling for the challenge text
    challengeName.style.fontWeight = 'normal';
    challengeName.style.fontSize = '15px';

    // Create a details tag to hold the topics
    const detailsTag = document.createElement('details');
    const summaryTag = document.createElement('summary');

    summaryTag.style.fontWeight = '700';
    summaryTag.style.fontSize = '13px';

    detailsTag.style.fontWeight = 'normal'

    const lastWord = challenge.name.split(' ').pop();
    summaryTag.textContent = lastWord;
    detailsTag.appendChild(summaryTag);
 
    // Loop through each topic and add it to the details
    challenge.topics.forEach(topic => {
        const topicItem = document.createElement('p');
        topicItem.textContent = topic;
        detailsTag.appendChild(topicItem);
    });
    // Append the details tag to the challengeDiv
    challengeDiv.appendChild(detailsTag);

      // Create and append the challenge status as a paragraph
      const challengeStatus = document.createElement('p');
      challengeStatus.textContent = challenge.status;
      challengeDiv.appendChild(challengeStatus);

      // styling for the div containing the challenges
    challengeDiv.style.display = 'flex';
    challengeDiv.style.justifyContent = 'space-between'
    challengeDiv.style.alignItems = 'center'
    challengeDiv.style.margin = '20px';
    challengeDiv.style.padding = '0 40px'

    // Finally, append the challengeDiv to the wrapper div
    getDivId.appendChild(challengeDiv);
});


const getFirstDiv = document.getElementsByClassName('challenge')[0];
getFirstDiv.style.background = '#51f351';
getFirstDiv.style.fontFamily = 'san serif';
getFirstDiv.style.fontSize = '11px';

const getSecondDiv = document.getElementsByClassName('challenge')[1];
getSecondDiv.style.background = '#ddf351';
getSecondDiv.style.fontFamily = 'san serif';
getSecondDiv.style.fontSize = '11px';

const getAllChallenge = document.querySelectorAll('div');
console.log(getAllChallenge);
const slicedElements = Array.from(getAllChallenge).slice(3);
slicedElements.forEach((challenge) => {
   challenge.style.background = '#fa7474'; 
   challenge.style.padding = '0 40px'
   challenge.style.marginBottom = '5px';
   challenge.style.display = 'flex';
   challenge.style.fontFamily = 'san serif';
   challenge.style.fontSize = '11px';
});


// Get Author
// Destructure the first name and last name from the author object
const { firstName, lastName } = challengeInfo.author;

const getAuthor = document.createElement('h2');

getAuthor.textContent = `${firstName} ${lastName}`;
getAuthor.style.fontFamily = 'arial';
getAuthor.style.margin = '20px';
getAuthor.style.padding = '0 40px'
getAuthor.style.letterSpacing = '1px';

getDivId.appendChild(getAuthor);

// Get Social Links
// Destructure the socialLinks array from the author object
const { socialLinks } = challengeInfo.author;

// Filter out the LinkedIn, Twitter, and GitHub handles from the socialLinks array
const linkedIn = socialLinks.find(link => link.social === 'LinkedIn');
const twitter = socialLinks.find(link => link.social === 'Twitter');
const github = socialLinks.find(link => link.social === 'Github');

// Create a new div element to hold the social links
const socialLinksDiv = document.createElement('div');
socialLinksDiv.style.display = 'flex';
socialLinksDiv.style.justifyContent = 'center';
socialLinksDiv.style.alignItems = 'center';
// socialLinksDiv.style.width = '500px';
getDivId.appendChild(socialLinksDiv);

let createSocialLinks;

for(let i = 0; i < 3; i++){
    createSocialLinks = document.createElement('a');
    createSocialLinks.className = 'social-links';
    createSocialLinks.style.fontSize = '2.5em';
    createSocialLinks.style.color = 'black';
    socialLinksDiv.appendChild(createSocialLinks);
}

const getFirstLinks = document.getElementsByClassName('social-links')[0];
getFirstLinks.href = linkedIn.url;
getFirstLinks.innerHTML =  linkedIn.fontawesomeIcon;
getFirstLinks.style.marginRight = '5px';

const getSecondLinks = document.getElementsByClassName('social-links')[1];
getSecondLinks.href = twitter.url;
getSecondLinks.innerHTML =  twitter.fontawesomeIcon;
getSecondLinks.style.marginRight = '5px';

const getThirdLinks = document.getElementsByClassName('social-links')[2];
getThirdLinks.href = github.url;
getThirdLinks.innerHTML =  github.fontawesomeIcon;
getThirdLinks.style.marginRight = '5px';

// Get the Bio of the Author

// Destructure the bio object from the author object
const { bio } = challengeInfo.author;

// Create a new div element to hold the bio
const bioDiv = document.createElement('div');
bioDiv.className = 'bio';
bioDiv.style.marginTop = '30px';
getDivId.appendChild(bioDiv);

// create bio p tag
const bioParagraph = document.createElement('p');
bioParagraph.textContent = bio;
bioParagraph.style.fontFamily = 'arial';
bioParagraph.style.fontSize = '13px';
bioParagraph.style.margin = '0 100px';
bioDiv.appendChild(bioParagraph);


// Author Information
const { titles, skills, qualifications } = challengeInfo.author;

// Create the information container div
const informationDiv = document.createElement('div');
informationDiv.className = 'author-info';
informationDiv.style.display = 'flex';
informationDiv.style.justifyContent = 'space-between';
informationDiv.style.alignItems = 'center';
// informationDiv.style.margin = '0 50px';
getDivId.appendChild(informationDiv);
console.log(informationDiv);


// Create a div for titles
const titlesDiv = document.createElement('div');
titlesDiv.className = 'titles';
titlesDiv.innerHTML = `<h4>Titles</h4>`;

// Add each title (with emoji) to the titles div
titles.forEach(title => {
    const titleItem = document.createElement('p');
    titleItem.textContent = `${title[0]} ${title[1]}`;
    titleItem.style.display = 'flex';
    titleItem.style.alignItems = 'flex-start';
    titlesDiv.appendChild(titleItem);
});

// Create a div for skills
const skillsDiv = document.createElement('div');
skillsDiv.className = 'skills';
skillsDiv.style.marginTop = '40px';
skillsDiv.innerHTML = `<h4>Skills</h4>`;

// Add each skill (with a checkmark emoji) to the skills div
skills.forEach(skill => {
    const skillItem = document.createElement('p');
    skillItem.textContent = `✅ ${skill}`;
    skillItem.style.display = 'flex';
    skillItem.style.alignItems = 'flex-start';
    skillsDiv.appendChild(skillItem);
});

// Create a div for qualifications
const qualificationsDiv = document.createElement('div');
qualificationsDiv.className = 'qualifications';
qualificationsDiv.innerHTML = `<h4>Qualifications</h4>`;

// Add each qualification (with an emoji) to the qualifications div
qualifications.forEach(qualification => {
    const qualificationItem = document.createElement('p');
    qualificationItem.innerHTML = `🧑‍🎓 ${qualification}`;
    qualificationItem.style.display = 'flex';
    qualificationItem.style.alignItems = 'flex-start';
    qualificationsDiv.appendChild(qualificationItem);
});

// Append the titles, skills, and qualifications divs to the main container
informationDiv.appendChild(titlesDiv);
informationDiv.appendChild(skillsDiv);
informationDiv.appendChild(qualificationsDiv);



// Create a container div for all keywords
const keywordsContainer = document.createElement('div');
keywordsContainer.className = 'keywords-container';
keywordsContainer.style.display = 'flex';
keywordsContainer.style.flexWrap = 'wrap';
keywordsContainer.style.gap = '10px';
keywordsContainer.style.padding = '10px';

// Loop through each keyword and create a div with a random background color
challengeInfo.keywords.forEach(keyword => {
  const keywordDiv = document.createElement('div');
  keywordDiv.textContent = `#${keyword}`;
  keywordDiv.style.backgroundColor = getRandomColors(); // Use the function to get a random color
  keywordDiv.style.padding = '5px 10px';
  keywordDiv.style.borderRadius = '15px';
  keywordDiv.style.fontWeight = 'bold';
  keywordDiv.style.fontStyle = 'italic';
  keywordsContainer.appendChild(keywordDiv);
});

// Append the keywords container to the body or a specific section of your HTML
getDivId.appendChild(keywordsContainer);
