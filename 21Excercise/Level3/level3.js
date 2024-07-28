// QUESTION1

// year color change
const h1 = document.querySelector('h1');
        
// Find the text containing the year 2020
const text = h1.textContent;
const year = '2020';

// Check if the text contains the year 2020
if (text.includes(year)) {
    // Create a new HTML string with the year 2020 wrapped in a span
    const newText = text.replace(year, `<span id="year">${year}</span>`);
    
    // Set the innerHTML of the h1 element to the new string
    h1.innerHTML = newText;
    
    // Select the span containing the year 2020
    const yearSpan = document.getElementById('year');
    
    // Change the font size and color
    yearSpan.style.fontSize = '2em'; // Increase font size
    yearSpan.style.color = 'red'; // Change color to red
}