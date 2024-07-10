
const countries = require('../../09Excercise/Level2/countries_data');


// QUESTION 1

let accessLanguage = countries.map((country) => country.languages);

const languageSet = new Set(countries);
console.log(languageSet);
console.log(languageSet.size);

// const counts = [];
// const count = {};

// for (const lang of languageSet) {
//  const filteredLang = lang.filter((lng) => lng === lang)
// counts.push({lang: lang});
// }
// console.log(counts);