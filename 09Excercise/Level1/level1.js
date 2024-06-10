// QUESTION 1
// FOREACH MAP FILTER REDUCE

// FOREACH - iterates through 


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// QUESTION 2
// function callback(element){
//     return element;
// }
// element.foreach(callback);
// element.map(callback);
// element.filter(callback);
// element.reduce(callback);

// QUESTION 3
// countries.forEach(countries => console.log(countries) )

// // QUESTION 4
// names.forEach(names => console.log(names));

// // QUESTION 5
// numbers.forEach(element => console.log(element));

// QUESTION 6
const countriesUpper = countries.map(element => element.toUpperCase());
console.log(countriesUpper);

// QUESTION 7
const countriesLength = countries.map(element => element.length);
console.log(countriesLength);

// QUESTION 8
const numbersSquare = numbers.map(element => element * element);
console.log(numbersSquare);

// QUESTION 9
const namesUpper = names.map(element => element.toUpperCase());
console.log(namesUpper);

// QUESTION 10
const mapPrice = products.map(element => element.price);
console.log(mapPrice);

// QUESTION 11
const landFilter = countries.filter(element => element.includes('land'));
console.log(landFilter);

// QUESTION 12
const sixFIlter = countries.filter(element => element.length === 6 )
console.log(sixFIlter);

// QUESTION 13
const moreLetterFilter = countries.filter(element => element.length >= 6 )
console.log(moreLetterFilter);

// QUESTION 14
const letterStart = countries.filter(element => element.startsWith('E'));
console.log(letterStart);

// QUESTION 15
const filterPrice = products.filter(element =>  typeof element.price === 'number');
console.log(filterPrice);

// QUESTION 16
const getStringLists = arr => {
    const filterArr = arr.filter(element => typeof element === "string")
    return filterArr;
}
console.log(getStringLists(names));

// QUESTION 17
const sums = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sums)

// QUESTION 18
const concatenatedCountries = countries.reduce((accumulator, currentValue, index) => {
    if (index === 0) {
      return currentValue;
    } else if (index === countries.length - 1) {
      return accumulator + ', and ' + currentValue + ' are North European countries';
    } else {
      return accumulator + ', ' + currentValue;
    }
  }, '');
console.log(concatenatedCountries);

// QUESTION 19


// QUESTION 20
const someNames = names.some(element => element.length > 7);
console.log(someNames);


// QUESTION 21
const everyCountries = countries.every(element => element.includes('land') );
console.log(everyCountries);

// QUESTION 22