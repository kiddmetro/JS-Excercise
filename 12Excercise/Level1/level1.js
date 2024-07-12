// QUESTION 1

const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g;

const matches = txt.match(pattern);
const array = matches.map(item => parseInt(item))

let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum)  