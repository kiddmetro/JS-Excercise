function firstValue(){
    let a = 4;

    function secondValue(){
        let b = 7;
        return b;
    }

    function thirdValue(){
        let c = 10;
        return c;
    }

    function forthValue(){
        let d = 13;
        return d;
    }

    return a + secondValue() + thirdValue() + forthValue();
    
}

let findValues = firstValue();
console.log(findValues);