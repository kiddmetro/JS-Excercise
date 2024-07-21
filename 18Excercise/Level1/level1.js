const countriesAPI = 'https://restcountries.com/v2/all'

// QUESTION 1
const getCountries = async () => {
    fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
}

const specificData = async () => {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    // console.log(data);
    const specificData = Object.entries(data).map(([key, value]) => {
        return {
            name: value.name,
            capital: value.capital,
            population: value.population,
            languages: value.languages.map(language => language.name),
            area: value.area
        }
    });
    console.log(specificData);
}

specificData();

// getCountries();

