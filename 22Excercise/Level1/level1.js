// creating multiple elements and appending to parent element
let title
for (let i = 0; i <= 101; i++) {
    title = document.createElement('p')
    title.className = 'title'
    title.style.fontSize = '30px'
    // title.style.display = 'grid'
    // title.style.backgroundColor = 'black'
    // title.style.color = 'white'
    // title.style.padding =  '10px'
    // title.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr'
    title.textContent = i
    document.getElementById('#container').appendChild(title)
}

let getBody = document.getElementsByTagName('body')[0]

