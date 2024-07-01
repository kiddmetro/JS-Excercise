const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

//   QUESTIION 1
// const totalPrice = products.filter(product => typeof product.price === 'number' && product.price > 0).reduce((sum, product) => sum + product.price, 0);
// console.log(totalPrice);

// // QUESTION 2
// const sumPrice = products.reduce((accumulator, product) => {
//   return accumulator + Number(product.price);
// }, 0);
// console.log(sumPrice);



const countries = require("./countries_data");

// QUESTION 3

// const categorizeCountries = (pattern) => {

//   return countries.filter(country => country.name.toLowerCase().includes(pattern.toLowerCase()));
// }

// // Example usage
// // console.log(categorizeCountries('land'));
// console.log(categorizeCountries('ia'));   
// console.log(categorizeCountries('island')); 
// console.log(categorizeCountries('stan')); 

// QUESTION 4

// const firstLetterCountry = (letter) =>{
//   let letterUc = letter.toUpperCase();
//   let list =  countries.filter(country => country.name.toUpperCase().startsWith(letterUc));
//   let number = list.length;
//   console.log(number)
//   return list;

// }
// console.log(firstLetterCountry('a'));

// QUESTION 5
// const getFirstTenCountries = () =>{
//   return countries.slice(0, 10);
// }

// console.log(getFirstTenCountries());


// // QUESTION 6
// const getLastTenCountries = () =>{
//   return countries.slice(-10);
// }

// console.log(getLastTenCountries());

// QUESTION 7
const getStartingLetter = arr => {
  const occurences = arr
    .reduce((acc, {name}) => {
      const startingLetter = name[0];
      acc[startingLetter] = (acc[startingLetter] || 0 ) + 1;
      return acc;
    }, {});

    return Object
      .keys(occurences)
      .sort()
      .map(letter => ({letter, count: occurences[letter]}));
}

console.log(getStartingLetter(countries));
