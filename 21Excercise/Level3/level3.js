// QUESTION1

// year color change
const h1 = document.querySelector('h1');
const text = h1.textContent;
const year = '2020';

if (text.includes(year)) {
    const newText = text.replace(year, `<span id="year">${year}</span>`);
    
    // Set the innerHTML of the h1 element to the new string
    h1.innerHTML = newText;
    // Select the span containing the year 2020
    const yearSpan = document.getElementById('year');
    
    yearSpan.style.fontSize = '2em'; 
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

