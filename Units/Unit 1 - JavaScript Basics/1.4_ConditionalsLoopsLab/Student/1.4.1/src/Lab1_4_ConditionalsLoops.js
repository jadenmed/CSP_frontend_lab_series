/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;

if (age <= 16) {
  console.log("Teen discount");
} else if (age >= 65) {
  console.log("Senior discount");
} else {
  console.log("No discount");
}

// TODO 2: Nested if with two numbers
let number1 = 10;
let number2 = 20;

if (number1 === number2) {
  console.log("Numbers are equal");
} else if (number1 > number2) {
  console.log("Number 1 is bigger");
} else {
  console.log("Number 1 is smaller");
}

// TODO 3: Switch statement for language greeting
let language = "French";

switch (language) {
  case "Spanish":
    console.log("Hola, mundo!");
    break;
  case "French":
    console.log("Bonjour tout le monde");
    break;
  case "English":
  default:
    console.log("Hello, world!");
    break;
}

// TODO 4: While loop (1 to 10)
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// TODO 5: Do..while loop (1 to 5)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let k = 1; k <= 20; k++) {
  if (k === 10) {
    console.log("ten");
  } else if (k === 20) {
    console.log("twenty");
  } else {
    console.log(k);
  }
}

// TODO 7: Even/Odd loop (1 to 20)
for (let n = 1; n <= 20; n++) {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
for (let b = 20; b >= 1; b--) {
  console.log(b);
}

// - Skip multiples of 3 in even/odd loop
for (let m = 1; m <= 20; m++) {
  if (m % 3 === 0) continue;
  if (m % 2 === 0) {
    console.log(`${m} is even`);
  } else {
    console.log(`${m} is odd`);
  }
}
