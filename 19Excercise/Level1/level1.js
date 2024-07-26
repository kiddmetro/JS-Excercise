function values (){
    let a = 5;
    let b =6;

    function addValues(){
        return a + b;
    }

    return addValues;
}

let findValues = values();

console.log(findValues())