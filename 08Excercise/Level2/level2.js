
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }

}

// QUESTION 1

const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  const result2 =   Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  
  console.log(result);
  console.log(result2);


  // QUESTION 2

let loggedInCount = 0;
let pointsGreaterThanOrEqualTo50Count = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    pointsGreaterThanOrEqualTo50Count++;
  }
}

console.log("Number of logged in users:", loggedInCount);
console.log("Number of users with 50 or more points:", pointsGreaterThanOrEqualTo50Count);

// QUESTION 3
 const mernStack = ["MongoDB", "Express","React", "Node"];

 const mernDeveloper = [];

 for (const user in users) {
   let getSkills = users[user].skills;
   let mernTech = mernStack.every(item => getSkills.includes(item));
   if(mernTech){
    mernDeveloper.push(user);
   }
 }

 console.log(mernDeveloper);

//  QUESTION 4
 const newUser = Object.assign({ }, users);
 newUser.Clinton ={
  email: 'clinton@clintom.com',
  skills: ['Html']
}
 console.log(newUser);

//  QUESTION 5
const userKeys = Object.keys(users);
console.log(userKeys);

// QUESTION 6
const userValues = Object.values(users);
console.log(userValues);

// QUESTION 7
const countries = {
  Afghanistan: {
    capital: 'Kabul',
    population: 38928341,
    languages: ['Pashto', 'Dari']
  },
  Albania: {
    capital: 'Tirana',
    population: 2877797,
    languages: ['Albanian']
  },
  Algeria: {
    capital: 'Algiers',
    population: 43851044,
    languages: ['Arabic']
  },
  Andorra: {
    capital: 'Andorra la Vella',
    population: 77265,
    languages: ['Catalan']
  },
  Angola: {
    capital: 'Luanda',
    population: 32866272,
    languages: ['Portuguese']
  }
};
for (const country in countries) {
  console.log(`Country: ${country}`);
  console.log(`Capital: ${countries[country].capital}`);
  console.log(`Population: ${countries[country].population.toString()}`);
  console.log(`Languages: ${countries[country].languages}`);
  console.log('-----------------------------------');
}

