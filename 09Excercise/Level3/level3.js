const countries = require('../Level2/countries_data');

// Excercise 1

// const sortedPopulation = countries.sort((a, b) => {
//   if (a.population < b.population) return -1
//   if (a.population > b.population) return 1
//   return 0
// });
// console.log(sortedPopulation);


//   // sorted by name
// const sortedNames = countries.sort((a,b) => {
//   if (a.name < b.name) return -1
//   if (a.name > b.name) return 1
//   return 0
// })
// console.log(sortedNames);

//   // sorted by capital
// const sortedCapital = countries.sort((a,b) => {
//     if (a.capital < b.capital) return -1
//     if (a.capital > b.capital) return 1
//     return 0
//   });
// console.log(sortedCapital);

// QUESTION 2
const mostSpokenLanguage = (arr, number) => {
  const mostLanguage = arr.reduce((acc, {languages}) => {
    const language = languages[0];
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const sortedLanguages = Object.keys(mostLanguage)
    .sort((a, b) => mostLanguage[b] - mostLanguage[a])
    .map(key => ({language: key, count: mostLanguage[key]}));

  return sortedLanguages.slice(0, number);
}

console.log(mostSpokenLanguage(countries, 10));

