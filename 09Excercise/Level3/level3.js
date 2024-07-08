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
// const mostSpokenLanguage = (arr, number) => {
//   const mostLanguage = arr.reduce((acc, {languages}) => {
//     const language = languages[0];
//     acc[language] = (acc[language] || 0) + 1;
//     return acc;
//   }, {});

//   const sortedLanguages = Object.keys(mostLanguage)
//     .sort((a, b) => mostLanguage[b] - mostLanguage[a])
//     .map(key => ({language: key, count: mostLanguage[key]}));

//   return sortedLanguages.slice(0, number);
// }

// console.log(mostSpokenLanguage(countries, 10));


// QUESTION 3

// const mostPopulatedCountries = (arr,number) =>{
//   const mostPopulated = arr.
//   reduce((acc,{name,population}) =>{
//     acc[name] = population;
//     return acc;
//   },{});

//   const sortedPopulations = Object
//   .keys(mostPopulated)
//   .sort((a,b) => mostPopulated[b] - mostPopulated[a])
//   .map(populated => ({population: populated, count:mostPopulated[populated]}));

//   return sortedPopulations.slice(0,number);
// }

// console.log(mostPopulatedCountries(countries,10));

// QUESTION 4

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];


const statistics = {
  count: function() {
    return ages.length;
  },
  sum: function(){
    return ages.reduce((acc,ages) => acc + ages, 0);
  },
  min: function(){
    return Math.min(...ages);
  }, 
  max: function(){
    return Math.max(...ages)
  },
  range: function(){
    return this.max() -  this.min();
  },
  mean: function(){
    return this.sum() / this.count();
  },
  median: function(){
    const mid = Math.floor(this.count()/2)
    const sorted = ages.sort((a,b) => a-b);
    return sorted[mid]
  },
  mode: function(){
  const count = {};
    ages.forEach(age => 
      {count[age] = count[age] + 1 || 1}
    );
    const max = Math.max(...Object.values(count));
    return Object.keys(count).find(key => count[key] === max);
  },
  var: function(){
  const mean = this.mean();
  const diffSq = ages.map(age => Math.pow(age - mean, 2));
  const sum = diffSq.reduce((acc,age) => acc + age, 0);
  return sum / this.count();
  },
  std: function(){
    const std = Math.sqrt(this.var());
    return std.toFixed(1);
  },

  freqDist: function(){
    const freqDist = {};
    ages.forEach(age => {
      freqDist[age] = freqDist[age] + 1 || 1;
    });
    const freqArray = Object.keys(freqDist).map(age => [freqDist[age], parseInt(age)]);
    freqArray.sort((a, b) => b[0] - a[0]);
    
    return freqArray;
  }

}

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ',statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ',statistics.freqDist());

