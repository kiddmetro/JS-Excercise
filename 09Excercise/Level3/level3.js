const countries = require('../Level2/countries_data');

// Excercise 1

  countries.sort((a, b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
  })
  console.log(countries);

