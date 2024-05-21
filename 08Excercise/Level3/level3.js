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

// QUESTION 2B
let userName = prompt("Enter Username");
let password = prompt("Enter Password");


function signIn(){  
    for (const user of users) {
        if (userName === user.username && password === user.password) {
            user.isLoggedIn = true;
            console.log("Login successful!");
            console.log(user);  
            return user;
        }
    }
    
    console.log("Wrong Username or Password");
    return null;
}

const loggedInUser = signIn();
const loggedIn = loggedInUser !== null;
console.log(`Logged in status: ${loggedIn}`);



// QUESTION 3


// Function to rate a product
function rateProduct(productId, userId, rating) {
    if (rating < 1 || rating > 5) {
      console.log('Rating must be between 1 and 5');
      return;
    }
  
    const product = products.find(p => p._id === productId);
  
    if (product) {
      // Check if the user has already rated the product
      const userRating = product.ratings.find(r => r.userId === userId);
  
      if (userRating) {
        userRating.rate = rating; // Update the existing rating
        console.log(`Updated rating for ${product.name} by user ${userId} to ${rating} stars`);
      } else {
        product.ratings.push({ userId, rate: rating }); // Add a new rating
        console.log(`Rated ${product.name} with ${rating} stars by user ${userId}`);
      }
      console.log(product);
    } else {
      console.log('Product not found');
    }
  }
  
  // Function to calculate the average rating of a product
  function averageRating(productId) {
    const product = products.find(p => p._id === productId);
  
    if (product) {
      const totalRatings = product.ratings.length;
  
      if (totalRatings === 0) {
        return 0; // No ratings yet
      }
  
      const sumRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const average = sumRatings / totalRatings;
  
      return average;
    } else {
      console.log('Product not found');
      return null;
    }
  }
  
  // Example usage:
  rateProduct('eedfcf', 'fg12cy', 4);
  rateProduct('aegfal', 'zwf8md', 4.5); 
  rateProduct('hedfcg', 'zwf8md', 3); 
  
  console.log('Average rating for mobile phone:', averageRating('eedfcf')); 
  console.log('Average rating for Laptop:', averageRating('aegfal')); 
  console.log('Average rating for TV:', averageRating('hedfcg')); 


//   QUESTION 4



// const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 }
//       ],
//       likes: []
//     },
