// QUESTION 1

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (paragraph) => {
    const pattern = /[.,]/g;
    const cleanedParagraph = paragraph.replace(pattern, '').toLowerCase();
    const words = cleanedParagraph.split(' ');

    const wordCount = {};
    words.forEach(word => {
        if (word in wordCount) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    });

    console.log(wordCount);
    const sortedWordCount = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    console.log(sortedWordCount.slice(0, 10));
}

console.log(tenMostFrequentWords(paragraph))