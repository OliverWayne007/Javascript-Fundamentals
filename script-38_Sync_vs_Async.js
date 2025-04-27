"use strict";

console.log('\n');

let a = 10;

let b = 20;

// setTimeout is an Asynchronous function
setTimeout( function(){
    console.log("I am an Asynchronous function !!!");
    console.log('\n');
} , 1000);

console.log("Synchronous !!!");

console.log(`The value of a is: ${a}`);

console.log(`The value of b is: ${b}`);