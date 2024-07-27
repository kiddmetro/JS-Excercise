// QUESTION 1
getFirstId.style.color = "blue";
getFirstId.style.border = "2px solid green";
getFirstId.style.backgroundColor = "black";
getFirstId.style.fontSize = "30px";
getFirstId.style.fontFamily = "Arial";

getSecondId.style.color = "green";
getSecondId.style.border = "2px solid orange";
getSecondId.style.backgroundColor = "purple";
getSecondId.style.fontSize = "20px";
getSecondId.style.fontFamily = "sans-serif";

getThirdId.style.color = "purple";
getThirdId.style.border = "2px solid yellow";
getThirdId.style.backgroundColor = "grey";
getThirdId.style.fontSize = "40px";
getThirdId.style.fontFamily = "Arial";

getFourthId.style.color = "red";
getFourthId.style.border = "2px solid blue";
getFourthId.style.backgroundColor = "pink";
getFourthId.style.fontSize = "50px";
getFourthId.style.fontFamily = "Arial";

// QUESTION 2 & 3
getAllId.forEach((element,index) => {
    if(index % 2 === 0){
        element.style.color = "green";
        element.textContent = `We Ediited Index 0 and 2`;
        element.id = 'index-zero-two';
        element.className = 'index-zero-two';
    }else{
        element.style.color = "red";
        element.textContent = `We Edited index 1 and 3`;
        element.id = 'index-one-three'
        element.className = 'index-one-three'
    }
});

