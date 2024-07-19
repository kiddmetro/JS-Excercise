// QUESTION 1
const PersonAccount = {
    firstname: "Asabeneh",
    lastname: "Yetayeh",
    incomes: [1000, 2000, 3000],
    expenses: [500, 100, 1000, 5000],

    totalIncome() {
        return this.incomes.reduce((acc, curr) => acc + curr.amount, 0);
    },

    totalExpenses() {
        return this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
    },

    accountInfo() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            incomes: this.incomes,
            expenses: this.expenses,
            totalIncome: this.totalIncome(),
            totalExpenses: this.totalExpenses(),
            netIncome: this.totalIncome() - this.totalExpenses()
        };
    },

    addIncome(amount, description) {
        this.incomes.push({ amount, description });
    },

    addExpense(amount, description) {
        this.expenses.push({ amount, description });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpenses();
    }
}

const stringPersonAccount = JSON.stringify(personAccount,undefined,4);
localStorage.setItem("personAccount",stringPersonAccount);
