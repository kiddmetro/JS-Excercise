ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.frequencyDistribution()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]