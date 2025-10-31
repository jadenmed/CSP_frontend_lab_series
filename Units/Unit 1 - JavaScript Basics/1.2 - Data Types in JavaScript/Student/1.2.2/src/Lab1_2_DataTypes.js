/* ===========================================================
   Lab 1.2 – Data Types
   Exploring primitive types, typeof, and basic conversions.
   =========================================================== */

let favoriteColor = "blue"
let luckyNumber = 7
let hasPet = true
let emptyValue = null
let mysteryValue // left undefined on purpose

// TODO 2: Use typeof to log each variable's type
console.log("favoriteColor type:", typeof favoriteColor)
console.log("luckyNumber type:", typeof luckyNumber)
console.log("hasPet type:", typeof hasPet)
console.log("emptyValue type:", typeof emptyValue) // note: null shows up as "object"
console.log("mysteryValue type:", typeof mysteryValue)

const textFive = "5"
const numberFive = 5

// Demonstrating implicit type conversion
console.log('"5" + 5 =', textFive + numberFive) // string concatenation -> "55"
console.log("5 + 5 =", numberFive + numberFive) // normal addition -> 10

const shoeSize = "9"
console.log('Number("9") =', Number(shoeSize))
console.log("String(123) =", String(123))
console.log("Boolean(0) =", Boolean(0)) // 0 becomes false
console.log('Boolean("hello") =', Boolean("hello")) // non-empty string becomes true

// TODO 5: NaN and isNaN – demonstrate failed conversion
const weirdNumber = Number("pizza")
console.log('Number("pizza") =', weirdNumber)
console.log("isNaN(Number('pizza')) =", isNaN(weirdNumber))

// TODO 6: Template literals – combine text and variables
console.log(`My favorite color is ${favoriteColor}, and my lucky number is ${luckyNumber}.`)

/* ===========================================================
   🎟 EXIT TICKET
   1. Data types used: string, number, boolean, null, undefined.
   2. Encountered both implicit and explicit conversions.
   3. Learned that typeof null returns "object" (a JS quirk).
   4. Plan to use console.log more for debugging next time.
   =========================================================== */
