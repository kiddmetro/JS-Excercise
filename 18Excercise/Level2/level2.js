const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const getCats = async () =>{
    try{
        const response = await fetch(catsAPI);
        const data = await response.json();
        // console.log(data);
        const catNames = Object.entries(data).map(([key,value]) => {
            return {
                name: value.name,
            }
        });
        console.log(catNames);
    }catch(error){
        console.log(error);
    }
}

getCats();