"use strict";

console.log('\n');


// This example is taken from Harkirat's 0-100 cohort week-1 lecture on Synchrnous vs Asynchronous Javascript.


function kiratsAsyncFunction()
{
    let p = new Promise( function(resolve , reject) {
        setTimeout( () => {
            resolve("Hi there !!!");
        } , 3000);
    } );

    return p;
}

// -------------------------------------------------------------------------------------------------------------------------------

// Using the .then() syntax

// function main()
// {
//     let promise = kiratsAsyncFunction();

//     promise.then( function(response) {
//         console.log(response);
//         console.log('\n');
//     } );

//     console.log("Hi there 1 !!!");   // In case of the .then() syntax, this line is executed before logging the response in 
//                                      // the promise.then() line above.
//     console.log('\n');
// }

// --------------------------------------------------------------------------------------------------------------------------------

// Using the async-await syntax

async function main()
{
    let response = await kiratsAsyncFunction();
    // let response = kiratsAsyncFunction();

    console.log(response);
    console.log('\n');

// If we don't use the await keyword before a function that returns a promise then, in the above scenario, the "response" variable 
// would contain the promise itself i.e. "Promise<pending>" and not the actual resolved value. This would make the entire code
// synchronous since we are no longer "awaiting" the resolution of the promise.

    console.log("Hi there 1 !!!");  // In case of the async-await syntax, this line is executed after logging the response above
                                    //    which is different than what we observe in case of the .then() syntax above.
    console.log('\n');
}


main();

// NOTE: await cannot be used independently without async. An await statement must be wrapped inside an async function body.
// Basically, any function that wants to use await needs to be async.