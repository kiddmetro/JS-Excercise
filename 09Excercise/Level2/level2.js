const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

//   QUESTIION 1
const totalPrice = products.filter(product => typeof product.price === 'number' && product.price > 0).reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

// QUESTION 2
const sumPrice = products.reduce((accumulator, product) => {
  return accumulator + Number(product.price);
}, 0);
console.log(sumPrice);



const countries = require("./countries_data");

// QUESTION 3

const categorizeCountries = (arr) => {

  return countries.filter(country => country.name.toLowerCase().includes(arr.toLowerCase()));
}

// Example usage
// console.log(categorizeCountries('land'));
console.log(categorizeCountries('ia'));   
// console.log(categorizeCountries('island')); 
// console.log(categorizeCountries('stan')); 