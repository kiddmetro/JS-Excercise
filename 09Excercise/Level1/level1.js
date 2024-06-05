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
console.log(sixFIlter)