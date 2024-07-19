// QUESTION 1

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];

const jsonSkills = JSON.stringify(skills,undefined,2);
console.log(jsonSkills);

// QUESTION 2
let age = 250;

const jsonAge = JSON.stringify(age, undefined,3);
console.log(jsonAge);

// QUESTION 3
let isMarried = true;

const jsonIsMarried = JSON.stringify(isMarried, undefined, 4);
console.log(jsonIsMarried);

// QUESTION 4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const jsonStudent = JSON.stringify(student, undefined,4);

console.log(jsonStudent);
