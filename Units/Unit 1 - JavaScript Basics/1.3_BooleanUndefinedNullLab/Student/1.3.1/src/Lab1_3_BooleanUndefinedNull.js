/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Boolean operations
// - Create isStudent = true, hasLicense = false
// - Print results of isStudent || hasLicense
let isStudent = true;
let hasLicense = false;

console.log("isStudent || hasLicense:", isStudent || hasLicense);
console.log("isStudent && hasLicense:", isStudent && hasLicense);
console.log("!isStudent:", !isStudent);

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)
console.log("false && (5 > 2):", false && (5 > 2));
console.log("true || (2 > 5):", true || (2 > 5));

let grade;
console.log("grade:", grade);

// TODO 4: Null
// - Create city = null, print it
// - Reassign city = 'Miami' and print again
let city = null;
console.log("city (initial):", city);

city = "Miami";
console.log("city (updated):", city);

// TODO 5: Immutability

// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again
let word = "hello";
word[0] = "H"; // Strings are immutable, this won’t change it
console.log("word after trying to change character:", word);

word = "Hello";
console.log("word after reassignment:", word);

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
let number = 15;
console.log("number between 10 and 20:", number > 10 && number < 20);

console.log("city is Miami or Berlin:", city === "Miami" || city === "Berlin");
