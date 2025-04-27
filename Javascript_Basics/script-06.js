// Using strict mode

"use strict";

// It is always a good practice to first initialize/define a function before calling the function.

function logger()
{
    console.log("My name is Oliver Queen !!!");
}

logger();
logger();
logger();

console.log("\n");

function fruitProcessor(apples , oranges)
{
    console.log("Number of apples used: " , apples , "\nNumber of oranges used: " , oranges);
    let Juice = `Juice with ${apples} apples and ${oranges} oranges !!!`;
    return Juice;
}

let juice = fruitProcessor(5 , 3);
console.log(juice);

console.log("\n");

console.log(fruitProcessor(5 , 2));

console.log("\n");


/* --------------------------------------------------------------------------------------------------------------------------- */


// Function Declaration

let birthYear = Number(prompt("Enter your birth year: "));

const age1 = calcAge1(birthYear);  // Calling the function before defining the function

function calcAge1(birthYear)
{
    return 2037 - birthYear;
}

//const age1 = calcAge1(birthYear);  // Calling the function after defining the function

console.log(`The age of a person whose birth year is ${birthYear} in 2037 will be: ` , age1 , ` years !!!`);

// NOTE: Function Declarations can be called before initialization in Javascript as illustrated above !!!

console.log("\n");


/* --------------------------------------------------------------------------------------------------------------------------- */

// Function Expression

//const age2 = calcAge2(birthYear);  // Calling the function expression before defining the function expression

const calcAge2 = function(birthYear) 
{
    return 2037 - birthYear;
}

const age2 = calcAge2(birthYear);  // Calling the function expression after defining the function expression

console.log(`The age of a person whose birth year is ${birthYear} in 2037 will be: ` , age2 , ` years !!!`);

// NOTE: Function Expressions cannot be called before initialization in Javascript !!!
// Uncaught ReferenceError: Cannot access 'calcAge2' before initialization


/* ------------------------------------------------------------------------------------------------------------------------- */


// Arrow Function
birthYear = Number(prompt("Enter your birth year: "));
let currentYear = Number(prompt("Enter the current year: "));

// Function Definition and Declaration
const calcAge3 = (birthyear , currentyear) => currentyear - birthyear;

// Function calling/invoking
let age = calcAge3(birthYear , currentYear);
console.log(`The age of a person whose birth year is ${birthYear} by ${currentYear} will be:` , age, `years.`);

/* -------------------------------------------------------------------------------------- */

let firstName = prompt("Enter your first name: ");
birthYear = Number(prompt("Enter your birth year: "));
currentYear = Number(prompt("Enter the current year: "));
let retirementAge = Number(prompt("Enter the retirement year: "));

// Function Definition and Declaration
const calcRetirementAge = (birthyear , currentyear , retirementage , firstname) => 
{
    const currentAge = currentyear - birthyear;
    const yearsUntilRetirement = retirementage - currentAge;
    return `${firstname} retires in ${yearsUntilRetirement} years !!!`;
}

// Function calling/invoking
console.log(calcRetirementAge(birthYear , currentYear , retirementAge , firstName));
console.log(calcRetirementAge(birthYear , currentYear , retirementAge , firstName));