/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

// TODO 3: Assignment operators with score variable

// TODO 4: Expressions with operator precedence

// TODO 5: Strings (single, double, backticks)

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example


console.log("=== TODO 1: Basic Variables ===")
var age = 34
let price=12.99;
console.log("Age: " + age)
console.log(`Price: $${price}`)

console.log("=== TODO 1b: NaN Example ===")
const sandra = "Sandra"
let sandraDivisionResult = (sandra/2)
console.log('"Sandra" / 2 =', sandraDivisionResult)

console.log("=== TODO 2: Basic Math Operations ===")
let numberA=15; const numberB = 4
console.log(numberA + " + " + numberB + " =", numberA + numberB)
console.log(`${numberA} - ${numberB} =`, numberA - numberB)
console.log(numberA+" * "+numberB+" =", numberA * numberB)
console.log(`${numberA} / ${numberB} =`, (numberA / numberB))

console.log("=== TODO 2b: Exponentiation & Modulo ===")
console.log("2 ** 3 =", 2 ** 3)
console.log("7 % 2 =", (7 % 2))

console.log("=== TODO 3: Assignment Operators ===")
let score = 50
console.log("Starting score =", score)
score += 10 ; console.log("After += 10 ->", score)
score -= 5; console.log("After -= 5 ->", score)
score *= 2 ; console.log("After *= 2 ->", score)
score/=5 ; console.log("After /= 5 ->", score)
score%=3; console.log("After %= 3 ->", score)

console.log("=== TODO 4: Operator Precedence ===")
const p1 = 5 + 3 * 2
const p2 = (5 + 3) * 2
const p3 = 10 - 8 / 4 + 6
console.log("5 + 3 * 2 =", p1)
console.log("(5 + 3) * 2 =", p2)
console.log("10 - 8 / 4 + 6 =", p3)

console.log("=== TODO 5: String Literals ===")
const singleQuotes = 'Learning JavaScript is fun!'
var doubleQuotes="Strings can use double quotes too."
let backticks = `Backticks let us embed values like age = ${age}.`
console.log(singleQuotes)
console.log(doubleQuotes)
console.log(backticks)

console.log("=== TODO 6: String Properties & Methods ===")
let greeting = "Hello, sadness and sunshine!"
console.log('greeting = "' + greeting + '"')
console.log("greeting.length =", greeting.length)
console.log("greeting.charAt(0) =", greeting.charAt(0))
console.log("greeting.charAt(5) =", greeting.charAt(5))
console.log("greeting[3] =", greeting[3])
console.log('greeting.indexOf("sad") =', greeting.indexOf("sad"))
console.log("greeting.repeat(2) =", greeting.repeat(2))
console.log("greeting.substring(0, 5) =", greeting.substring(0, 5))
console.log("greeting.substr(7, 3) =", greeting.substr(7, 3))
console.log("greeting.slice(-9) =", greeting.slice(-9))

console.log("=== Stretch: Even Number Check ===")
let numberToCheck = 42
let isEven = (numberToCheck % 2) === 0
console.log(numberToCheck + " is even?", isEven)

console.log("=== Stretch: localeCompare() Example ===")
const wordA="apple"; const wordB="banana"
console.log(`"${wordA}".localeCompare("${wordB}") =`, wordA.localeCompare(wordB))
console.log(`"${wordB}".localeCompare("${wordA}") =`, wordB.localeCompare(wordA))
