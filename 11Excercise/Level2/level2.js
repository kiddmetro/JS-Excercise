    const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
]

// QUESTION 1

// for (const user of users) {
//     // const getKeys = Object.keys(user);
//     // console.log(getKeys);

//     const [key1, key2, key3, key4] = Object.keys(user);
//     console.log(key1,key2, key3, key4)
// };


// QUESTION 2

for (const user of users) {
    const {skills} = user;
    if(skills.length < 2){
        user == true;
        console.log(user)
    }
}