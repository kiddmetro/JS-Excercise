const student = {
    firstname: 'Asap',
    lastname: 'Nonzi',
    age: 21,
    skills: ['Javascript', 'React', 'Node', 'MongoDB', 'Python'],
    country: 'Nigeria'
}

const stringStudent = JSON.stringify(student,undefined,4);

localStorage.setItem('student',stringStudent);