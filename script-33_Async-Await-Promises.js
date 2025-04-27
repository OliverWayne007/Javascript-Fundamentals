"use strict";

console.log('\n');


// ----------------------------------------------------------------------------------------------------------------------------------

function findSum(n)
{
    for(let i = 0 ; i <= 1e10 ; i++);

    let ans = 0;

    for(let i = 1 ; i <= n ; i++)
    {
        ans += i;
    }

    console.log(`The sum of first 100 numbers is: ${ans}`);
}

function findSumTill100()
{
    findSum(100);
    console.log("I am done stalling !!!\n");
}

// setTimeout(findSumTill100 , 1000);  // setTimeout is an asynchronous function

// console.log("Hello World !!!");  // This line is executed before the setTimeout function because setTimeout is Asynchronous


// --------------------------------------------------------------------------------------------------------------------------------

// Trying to achieve a timeout of a few seconds before execution of the findSumTill100() function in a synchronous manner
// Basically, we want to wait for the findSumTill100() function to finish execution before proceeding with the execution of the
// next line of code

// We can do this by writing a code for busy waiting

// let a = 0;

// for(let i = 1 ; i <= 1e9 ; i++)
// {
//     a++;
// }

// findSumTill100();

// console.log("Hello World !!!\n");


// --------------------------------------------------------------------------------------------------------------------------------

setTimeout(findSumTill100 , 0);

// The below lines of code are executed before the above setTimeout() function because the setTimeout function is asynchronous
let a = 0;

for(let i = 1 ; i <= 1e9 ; i++)
{
    a++;
}

findSumTill100();

console.log("Hello World !!!\n"); 


// --------------------------------------------------------------------------------------------------------------------------------

// const prom = new Promise( (resolve , reject) => {
//     findSumTill100();
//     let check = true;
//     if(check ===  true)
//     {
//         resolve("Promise Fulfilled !!!");
//     }
//     else
//     {
//         reject("Promise Rejected !!!");
//     }
// })
// .then( (message) => {
//     console.log(message);
//     console.log("Hello World !!!");
// } )
// .catch( (err) => { console.log(err); } )
// .finally( () => { console.log("Promise Resolved !!!\n"); } );