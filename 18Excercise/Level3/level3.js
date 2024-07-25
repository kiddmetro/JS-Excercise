// QUESTION 1

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// async function getAverageWeight() {
//     try {
//         const response = await fetch(catsAPI);
//         const catsData = await response.json();
    
//         const weights = catsData.map(cat => {
//             const weightRange = cat.weight.metric.split(' - ').map(Number);
//             const averageWeight = (weightRange[0] + weightRange[1]) / 2;
//             // return averageWeight;
//             console.log(weightRange);
//         });

//         const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
//         const averageWeight = totalWeight / weights.length;

//         console.log(`The average weight of the cats is ${averageWeight.toFixed(2)} kg.`);
//     } catch (error) {
//         console.error('Error fetching the cat data:', error);
//     }
// }

// getAverageWeight();


// QUESTION 2

const getLargestCountries = async () => {
    try {
        const response = await fetch(countriesAPI);
        const getData = await response.json();

        const countriesWithArea = getData.map(country => {
            return {
                name: country.name,
                area: country.area || 0  // Some countries might not have an area defined, so default to 0
            }
        });

        // Sort the countries by area in descending order
        countriesWithArea.sort((a, b) => b.area - a.area);

        // Get the top 10 largest countries
        const largestCountries = countriesWithArea.slice(0, 10);

        console.log('The 10 largest countries by area:', largestCountries);
    } catch (error) {
        console.log('Error fetching the countries data:', error);
    }
};

getLargestCountries();

// QUESTION 2