const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];


// QUESTION 1
// const A = new Set(a);
// const B = new Set(b);

// const c = [...A,...B];
// const C = new Set(c);

// console.log(C)


// QUESTION 2
// const A = new Set(a);
// const B = new Set(b);

// const c = [...A].filter(x => B.has(x));
// const C = new Set(c);

// console.log(C)

// QUESTION 3

const A = new Set(a);
const B = new Set(b);

const c = [...A].filter(x => !B.has(x));
const C = new Set(c);

console.log(C);
