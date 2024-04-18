 let challenge = "30 Days Of JavaScript";

 console.log(`Welcome to ${challenge}`);

 console.log(`welcome to ${challenge.toUpperCase()}`);

 console.log(`welcome to ${challenge.toLowerCase()}`);

 console.log(challenge.substr(3,5));

 console.log(challenge.slice(3));

 console.log(challenge.includes("Script"));

 console.log(challenge.split());

 console.log(challenge.split(" "));

 let company = "Facebook, Google, Mircosoft, Apple, IBM, Oracle, Amazon";
 console.log(company.split(", "));

 console.log(challenge.replace("JavaScript", "Python"));

 console.log(challenge.charAt(15));

 console.log(challenge.charCodeAt("J"));

 console.log(challenge.indexOf("a"));

 console.log(challenge.lastIndexOf("a"));

 let position = 'You cannot end a sentence with because because because is a conjunction';
 console.log(position.indexOf("because"));
 console.log(position.lastIndexOf("because"));
 console.log(position.search("because"));

 let trim =  ' 30 Days Of JavaScript ';
 console.log(trim.trim());
console.log(trim.startsWith(" "));
console.log(trim.endsWith(" "));
console.log(trim.match("a"));

let wordOne = "30 Days Of";
let wordTwo = "JavaScript";
console.log(wordOne.concat(" ",wordTwo));
console.log(wordTwo.repeat(2));
