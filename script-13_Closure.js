// Using strict mode
"use strict";

console.log('\n');

// Closure : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

let message = "Global Scope !!!";
console.log("Hello : " + message);

console.log('\n');

function hello()
{
    let message = "Function Scope !!!";
    {
        let message = "Block Scope !!!";
        console.log("Hello : " + message);
    }
    console.log("Hello : " + message);
    let fun = function func()
    {
        console.log("Iam the function func !!! " + message);
    }
    message = `This message was changed before returning the variable "fun" containing the function "func" !!!`;
    return fun;
}

const fun = hello()

console.log('\n');

fun();

console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */

const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
        let a = 2;
        console.log(a);
        const z = () => {
            let a = 3;
            console.log(a);
        }
        z();
    }
    y();
}

x();

console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */


function returnFunc1()
{
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            let a = 2;
            console.log(a);
            const z = () => {
                let a = 3;
                console.log(a);
            }
            z();
        }
        // a = 999;
        y();
    }
    return x;
}

let a = returnFunc1();

a();

console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */


function returnFunc2()
{
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            console.log(a);
            const z = () => {
                console.log(a);
            }
            z();
        }
        a = 999;
        y();
    }
    return x;
}

let b = returnFunc2();

b();

console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */


function returnFunc3()
{
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            console.log(a);
            const z = () => {
                console.log(a);
            }
            a = 1000;
            z();
        }
        a = 999;
        y();
    }
    return x;
}

let c = returnFunc3();

c();

console.log('\n');



/* ------------------------------------------------------------------------------------------------------------------------ */


function returnFunc4()
{
    let num = 10;
    console.log(num);
    function closure_func()
    {
        console.log(num);
    }
    num = 20;
    return closure_func;
}

const returned_func = returnFunc4();

returned_func();

console.log('\n');