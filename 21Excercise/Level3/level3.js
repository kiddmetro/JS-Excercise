// QUESTION1

// year color change
const h1 = document.querySelector('h1');
const text = h1.textContent;
const year = '2020';
h1.style.fontWeight = 'normal';

if (text.includes(year)) {
    const newText = text.replace(year, `<span id="year">${year}</span>`);

    h1.innerHTML = newText;
    const yearSpan = document.getElementById('year');
    
    yearSpan.style.fontSize = '1.5em'; 
    yearSpan.style.fontFamily = 'Arial';

    function getRandomColors(){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i=0; i < 6;i++){ 
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }
    setInterval(function() {
        yearSpan.style.color = getRandomColors();
    }, 1000);
}

// align items center
const getDiv = document.getElementsByClassName('wrapper');
const getBody = document.getElementsByTagName('body')[0];

getBody.style.width = 'auto';
getBody.style.height = '100vh';
getBody.style.display = 'flex';
getBody.style.justifyContent = 'center';

getDiv[0].style.justifyContent = 'center';
getDiv[0].style.textAlign = 'center';

// edit the h2
const h2 = document.querySelector('h2');

h2.style.textDecoration = "underline";
h2.style.fontFamily = 'san serif';
h2.style.fontSize = '1rem';
h2.style.fontWeight = 'normal';

// adding date and time

const createTime = setInterval(function() {
    const getTime = new Date().toLocaleTimeString();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return document.getElementById('timer').innerHTML = `${formattedDate} ${getTime}`;
}, 1000);

// change background color
let getHtmlTimer = document.getElementById('timer');
function getRandomColors(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i < 6;i++){ 
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

getHtmlTimer.style.padding = '10px';
getHtmlTimer.style.fontWeight = '500';
getHtmlTimer.style.textDecoration = 'none';
getHtmlTimer.style.marginLeft = '200px';
getHtmlTimer.style.marginRight = '200px';

setInterval(function() {
    getHtmlTimer.style.background = getRandomColors();
}, 1000);


// complete the exercise
const getUlTag = document.getElementsByTagName('ul');
getUlTag[0].style.listStyleType = 'none';


const getLiTag = document.getElementsByTagName('li');

// * Completed challenge has background green

getLiTag[0].style.textDecoration = 'none';
getLiTag[0].style.background = '#51f351';
getLiTag[0].style.padding = '10px';
getLiTag[0].style.marginBottom = '5px';
getLiTag[0].style.display = 'flex';
getLiTag[0].style.fontFamily = 'san serif';
getLiTag[0].style.fontSize = '11px';

// * Ongoing challenge has background yellow
getLiTag[1].style.background = '#ddf351';
getLiTag[1].style.padding = '10px';
getLiTag[1].style.marginBottom = '5px';
getLiTag[1].style.display = 'flex';
getLiTag[1].style.fontFamily = 'san serif';
getLiTag[1].style.fontSize = '11px';

// * Coming challenges have background red
const getAllLiTag = document.querySelectorAll('li');
const slicedElements = Array.from(getAllLiTag).slice(2);
slicedElements.forEach((li) => {
   li.style.background = '#fa7474';
   li.style.padding = '10px';
   li.style.marginBottom = '5px';
   li.style.display = 'flex';
   li.style.fontFamily = 'san serif';
   li.style.fontSize = '11px';

});


