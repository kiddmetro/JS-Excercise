const countries = require('../../09Excercise/Level2/countries_data');

// QUESTION 1

// for (const country of countries) {
//     const{name, capital,population, languages} = country;
//     console.log(name, capital, population, languages);
// }

// QUESTION 2
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// const [name, skills, [jsScore, reactScore]] = student;

// console.log(`Name: ${name} | Skills: ${skills} | Js Score: ${jsScore} | React Score: ${reactScore}`);

// QUESTION 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];

  const convertArrayToObject = (array) => {
    const newArray = [];
    const newObj = {};
    for (const arr of array) {
      const [name, skills, scores] = arr;
        newObj.name = name;
        newObj.skills = skills;
        newObj.scores = scores; 
      newArray.push(newObj);
    }
    return newArray;
  }

//   console.log(convertArrayToObject(students));

// QUESTION 4
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

const newStudent = { ...student };
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.dir(newStudent, { depth: null });









