function personAccount() {
    let firstName = 'Clinton';
    let lastName = 'Igwe';
    let incomes = [
        { amount: 3000, description: "Salary" },
        { amount: 500, description: "Freelance work" },
        { amount: 200, description: "Investment dividends" }
    ];
    let expenses = [
        { amount: 1000, description: "Rent" },
        { amount: 300, description: "Groceries" },
        { amount: 200, description: "Utilities" },
        { amount: 100, description: "Internet" }
    ];

    function totalIncome() {
        return incomes.reduce((acc, cur) => acc + cur.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((acc, cur) => acc + cur.amount, 0);
    }

    function accountInfo() {
        return `Name: ${firstName} ${lastName}\nTotal Income: ${totalIncome()}\nTotal Expenses: ${totalExpense()}\nAccount Balance: ${accountBalance()}`;
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return accountInfo(); 
}

console.log(personAccount())