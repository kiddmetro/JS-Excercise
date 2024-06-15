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