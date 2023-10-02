// Using strict mode
"use strict";

console.log('\n');


// Hoisting in JavaScript


/* -----------------------------------------  EXAMPLE-1 ---------------------------------------------------------------------------- */

console.log(x);  // Undefined

console.log('\n');

console.log(sayHello);  // function definition

console.log('\n');

sayHello();  // Hello !!!

var x = 5;
// let x = 5;

function sayHello()
{
    console.log("Hello !!!\n");
}

console.log(x);

console.log('\n');

sayHello();

console.log('\n');


/* ----------------------------------------   EXAMPLE-2  ---------------------------------------------------------------------------  */

logger();

console.log(1 , '\n');

function logger()
{
    console.log(2 , '\n');
    func();
    console.log(3 , '\n');
    function func(){
        console.log("Finished !!!\n");
    }
    return;
}

console.log('\n');