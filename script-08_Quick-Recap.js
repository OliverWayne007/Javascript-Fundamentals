// Using strict mode
"use strict;"

// Normal Function
function PrintName1(name)
{
    console.log("My name is " , name , " !!!");
}

// Function Expression
let myName = function(name)
{
    // return `My name is ${name} !!!`;
    console.log("My name is " , name , " !!!");
}

// Arrow Function
let meName = (name) => { console.log(`My name is ${name} !!!`); }



PrintName1("Oliver Queen");

console.log('\n');

console.log(myName("Oliver Queen") , typeof(myName("Oliver Queen")));

console.log('\n');

console.log(myName , typeof(myName));

console.log('\n');

myName("Oliver Queen");

console.log('\n');

console.log(console.log("Oliver Queen !!!"));

console.log('\n');

meName("Bruce Wayne");

console.log('\n');

console.log(meName("Bruce Wayne"));

console.log('\n');