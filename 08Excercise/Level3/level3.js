// QUESTION 1
const personAccount = {
    firstName: 'Solomon',
    lastName: 'Andrew',
    incomes: {
        salary: 230000,
        crypto: 30000
    },
    expenses: {
        rent: 12000,
        waterBill: 1000,
        hospitialBills: 2000
    },
    totalIncome: function(){
        let totalIncome = this.incomes.salary + this.incomes.crypto;
        return totalIncome;
    },
    totalExpenses: function(){
        totalExpenses = this.expenses.rent + this.expenses.waterBill + this.expenses.hospitialBills;
        return totalExpenses;
    },
    accountInfo: function(){
        return `The User Info is below:\n 
        First Name:${this.firstName}\nLast Name:${this.lastName}\n`
    },
    addIncome: function(){
        return this.incomes.salary + this.incomes.crypto;
    }, 
    addExpenses: function(){
        return this.expenses.rent + this.expenses.waterBill + this.expenses.hospitialBills;
    },
    accountBalance: function(){
        return this.totalIncome - this.totalExpenses;
    }
}





const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// QUESTION 2

/*let id;
let userName = prompt("Enter Username");
let email = prompt("Enter Email");
let password = prompt("Enter Password");
let loggedIn;


function signUp(){
    id = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for(let i = 0; i <= 5;i++){
        let random = Math.floor(Math.random() * string.length -1);
        let generateID = string.charAt(random).toLowerCase();
        id += generateID;
    }


    
    let month = new Date().getMonth();
    if(month < 10){
        ctrlMonth = '0'+ month;
    }
    else{
        ctrlMonth = month;
    }
    let date = new Date().getDate();
    if(date < 10){
        ctrlDate = '0'+ date;
    }
    else{
        ctrlDate = date;
    }
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    if(hours < 10){
        ctrlHours = '0'+ hours;
    }
    else{
        ctrlHours = hours;
    }
    let minutes = new Date().getMinutes();
    if(minutes < 10){
        ctrlMinutes = '0'+ minutes;
    }
    else{
        ctrlMinutes = minutes;
    }
    let timeOfTime = '';
    if(hours >= 12){
        timeOfTime = 'PM'
    }
    else{
        timeOfTime = 'AM'
    }
    let showDate = `${ctrlMonth}/${ctrlDate}/${year} ${ctrlHours}:${ctrlMinutes} ${timeOfTime} `;



    for (const user in users) {
        let checkUser = users[user].username;
       if(userName === checkUser){
        return 'You Already have an account with same user name';
       }
       else{
        users.push( {
            _id: id,
            username: userName,
            email: email,
            password: password,
            createdAt: showDate,
            isLoggedIn: false
          });
         return users;

       }

    }
  
    
}

console.log(signUp()); */

// QUESTION 3
let userName = prompt("Enter Username");
let password = prompt("Enter Password");
let loggedIn;


function signIn(){  
    for (const user in users) {
        let checkUser = users[user].username;
        let checkPassword = users[user].password;
       if(userName === checkUser && password === checkPassword ){
        return users.includes(userName);
       }
       else{
        // return 'Wrong Username or Password';
       }
    }
}

console.log(signIn());


// _id: 'ghderc',
// username: 'Thomas',
// email: 'thomas@thomas.com',
// password: '123333',
// createdAt:'08/01/2020 10:00 AM',
// isLoggedIn: false

