const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const countries = ['Finland', 'Sweden', 'Norway'];

// QUESTION 1
const empty = new Set();
console.log(empty);

// QUESTION 2
const set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);

// QUESTION 3
console.log(set.delete(10));
console.log(set);

// QUESTION 4
set.clear();
console.log(set);

// QUESTION 5
// const countriesSet = new Set(countries);
// countriesSet.add('Denmark');
// countriesSet.add('Japan');
// console.log(countriesSet);

// QUESTION 6

countries = [
    ['Finland',7 ],
    ['Sweden', 6],
    ['Norway', 7],
  ]
const conutriesMap = new Map(countries);
console.log(conutriesMap);
