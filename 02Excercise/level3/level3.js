// QUESTION 1
let longString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi;
let countString = longString.match(pattern);
console.log(countString);

// QUESTION 2
let longStringTwo = 'You cannot end a sentence with because because because is a conjunction';
let patternTwo = /because/gi;
let countStringTwo = longStringTwo.match(patternTwo);
console.log(countStringTwo);

// QUESTION 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let regExOne = /\%/g;
let regExTwo = /\@/g;
let regExThree = /\$/g;
let regExFour = /\&/g;
let regExFive = /\#/g;

$wordReplace = sentence.replace(regExOne,"")
$wordReplaceTwo = $wordReplace.replace(regExTwo,"");
$wordReplaceThree = $wordReplaceTwo.replace(regExThree,"");
$wordReplaceFour = $wordReplaceThree.replace(regExFour,"");
$wordReplaceFive = $wordReplaceFour.replace(regExFive,"");
console.log($wordReplaceFive);

let patternThree = /teaching/gi;
let patternFour = /is/gi;
console.log($wordReplaceFive.match(patternThree));
console.log($wordReplaceFive.match(patternFour));