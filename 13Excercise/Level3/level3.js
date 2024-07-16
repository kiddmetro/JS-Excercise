const array = Array(1000000).fill(0); // Creating an array with 1,000,000 elements

// While Loop
console.time('while loop');
let i = 0;
while (i < array.length) {
  array[i]++;
  i++;
}
console.timeEnd('while loop');

// For Loop
console.time('for loop');
for (let i = 0; i < array.length; i++) {
  array[i]++;
}
console.timeEnd('for loop');

// For...of Loop
console.time('for...of loop');
for (const value of array) {
  array[array.indexOf(value)]++;
}
console.timeEnd('for...of loop');

// forEach Loop
console.time('forEach loop');
array.forEach((value, index) => {
  array[index]++;
});
console.timeEnd('forEach loop');
