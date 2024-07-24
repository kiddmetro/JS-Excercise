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
    const response = await fetch(countriesAPI);
    const getData = await response.json();

    try{
        const area = Object.entries(getData).map(([key,value]) => {
            
            return sortArray
            // return {
            //     country: value.name,
            //     area: value.area
            // }
        })
        console.log(area)
    }catch(error){
        console.log(error)
    }
}

getLargestCountries();

// QUESTION 2