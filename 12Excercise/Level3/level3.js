sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


function cleanText(text) {
  return text.replace(/[&@#%$;!]/g, '');
  
}
// console.log(cleanText(sentence));

function mostFrequent(text) {
  const words = text.split(' ');
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  const sortedWordCount = Object.entries(wordCount).sort((a,b) => b[1] - a[1]);
  return sortedWordCount.slice(0,3).map(([word,count]) => ({word,count}));
}

console.log(mostFrequent(cleanText(sentence)));