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
