// Using strict mode
"use strict";

// LOOPS IN JAVASCRIPT

for(let rep = 1 ; rep <= 10 ; rep++)
{
    console.log(`Lifting weights repitition ${rep}`);
}

console.log('\n');

// Array containing elements of different data types
let mixTypes = ["Arpit" , "Singh" , 7 , true , [1, 2 ,3]];

for(let i = 0 ; i < mixTypes.length ; i++)
{
    // Reading from the mixTypes array
    console.log(mixTypes[i] , typeof(mixTypes[i]));
}

console.log('\n');

let Types = new Array();   // Another way of creating an empty array in Javascript

console.log(Types , Types.length);  // Since the array is empty, Types.length = 0.

for(let i = 0 ; i < mixTypes.length ; i++)
{
    // Filling the Types array
    // Types[i] = typeof(mixTypes[i]);  // One way of filling the array
    Types.push(typeof(mixTypes[i]));    // Another way of filling the array
}

console.log(Types);

console.log('\n');

let BirthYears = [1991 , 1969 , 2007 , 2020];

let CurrentAge = [];

for(let i = 0 ; i < BirthYears.length ; i++)
{
    CurrentAge.push(2022 - BirthYears[i]);
}

console.log(CurrentAge);

console.log('\n');

// Continue and Break statements in a for loop

for(let i = 0 ; i < mixTypes.length ; i++)
{
    if(typeof(mixTypes[i]) !== "string")
    {
        continue;
    }
    console.log(mixTypes[i]);
}

console.log('\n');

for(let i = 0 ; i < mixTypes.length ; i++)
{
    if(typeof(mixTypes[i]) === "boolean")
    {
        break;
    }
    console.log(mixTypes[i]);
}

console.log('\n');

// Looping backwards

for(let i = mixTypes.length - 1 ; i >= 0 ; i--)
{
    console.log(i , mixTypes[i]);
}

console.log('\n');

for(let i = 1 ; i <= 3 ; i++)
{
    for(let j = 1 ; j <= 5 ; j++)
    {
        console.log(`Repitition of exercise ${i} -----(${j})`);
    }
}

console.log('\n');

// While - Loop

let rep = 1;
while(rep <= 10)
{
    console.log(`Lifting weights repitition ${rep} !!!`);
    ++rep;
}

console.log('\n');

let dice = Math.trunc(Math.random() * 6) + 1;
if(dice === 6)
{
    console.log("The loop is about to end !!!");
}

while(dice !== 6)
{
    console.log(`You rolled a ${dice} !!!`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)
    {
        console.log("The loop is about to end !!!");
    }
}

console.log('\n');