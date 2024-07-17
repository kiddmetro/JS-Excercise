// QUESTION 1

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

// Statistics class
class Statistics {
    constructor(ages) {
        this.ages = ages;
    }

    count() {
        return this.ages.length;
    }

    sum() {
        return this.ages.reduce((acc, curr) => acc + curr, 0);
    }

    min() {
        return Math.min(...this.ages);
    }

    max() {
        return Math.max(...this.ages);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return Math.round(this.sum() / this.count());
    }

    median() {
        const sortedAges = [...this.ages].sort((a, b) => a - b);
        const mid = Math.floor(sortedAges.length / 2);
        return sortedAges.length % 2 === 0 ? (sortedAges[mid - 1] + sortedAges[mid]) / 2 : sortedAges[mid];
    }

    mode() {
        const modeMap = new Map();
        let maxCount = 0;
        let mode;
        for (const age of this.ages) {
            const count = modeMap.get(age) || 0;
            modeMap.set(age, count + 1);
            if (count + 1 > maxCount) {
                maxCount = count + 1;
                mode = age;
            }
        }
        return { mode, count: maxCount };
    }

    var() {
        const mean = this.mean();
        const squaredDifferences = this.ages.map(age => Math.pow(age - mean, 2));
        const sumOfSquaredDifferences = squaredDifferences.reduce((acc, curr) => acc + curr, 0);
        return sumOfSquaredDifferences / (this.count() - 1);
    }

    std() {
        return Math.sqrt(this.var());
    }

    frequencyDistribution() {
        const frequencyMap = new Map();
        for (const age of this.ages) {
            const count = frequencyMap.get(age) || 0;
            frequencyMap.set(age, count + 1);
        }
        return frequencyMap;
    }
}

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()); // 25
console.log('Sum:', statistics.sum()); // 744
console.log('Min:', statistics.min()); // 24
console.log('Max:', statistics.max()); // 38
console.log('Range:', statistics.range()); // 14
console.log('Mean:', statistics.mean()); // 30
console.log('Median:', statistics.median()); // 27
console.log('Mode:', statistics.mode()); // { mode: 26, count: 5 }
console.log('Variance:', statistics.var()); // 17.5
console.log('Standard Deviation:', statistics.std()); // 4.2
console.log('Frequency Distribution:', statistics.frequencyDistribution());

// QUESTION 2

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    totalIncome() {
        return this.incomes.reduce((acc, curr) => acc + curr.amount, 0);
    }

    totalExpenses() {
        return this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
    }

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
    }

    addIncome(amount, description) {
        this.incomes.push({ amount, description });
    }

    addExpense(amount, description) {
        this.expenses.push({ amount, description });
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpenses();
    }
}

const person = new PersonAccount(
    'John',
    'Doe',
    [{ amount: 100, description: 'Freelance work' }, { amount: 200, description: 'Salary' }, { amount: 300, description: 'Investment' }],
    [{ amount: 20, description: 'Groceries' }, { amount: 40, description: 'Transport' }, { amount: 60, description: 'Entertainment' }]
);

console.log(person.accountInfo());
