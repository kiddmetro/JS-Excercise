// QUESTION 1

const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g;

const matches = txt.match(pattern);
const array = matches.map(item => parseInt(item))

let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum);

// QUESTION 2

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let numericPoints = points.map(point => {
  let match = point.match(/-?\d+/);
  return match ? parseInt(match[0]) : 0;
});
let sortedPoints = numericPoints.sort((a, b) => a - b);
let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log("Sorted Points: ", sortedPoints);
console.log("Distance: ", distance);



