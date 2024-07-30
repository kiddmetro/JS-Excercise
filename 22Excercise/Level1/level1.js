// creating multiple elements and appending to parent element
let title
for (let i = 0; i <= 101; i++) {
    title = document.createElement('p')
    title.className = 'title'
    title.style.fontSize = '60px'
    title.style.color = '#fff'
    title.textContent = i
    
    // general styling
    title.style.margin = '7px'
    title.style.padding = '40px'
    title.style.display = 'flex'
    title.style.justifyContent = 'center'
    title.style.alignItems = 'center'
    // background color logic
    let checker = parseInt(title.textContent)
    if (checker % 2 === 0 ){
        title.style.background = 'rgb(0, 194, 0)'
    }else{
        title.style.background = 'rgb(255, 221, 0)'
    }

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    if (isPrime(checker)) {
        title.style.background = 'rgb(197, 1, 40)'; // Prime numbers
    }

    document.getElementById('container').appendChild(title)
}

let getDiv = document.getElementById('container')
getDiv.style.display = 'grid'
getDiv.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'

