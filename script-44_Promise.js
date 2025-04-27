"use strict";

console.log('\n');

function WorkingOfPromise()
{
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            resolve("Promise Resolved after 2 seconds !!!");
        } , 2000);
    } );
}

let promise = WorkingOfPromise();

// console.log(promise);  // Promise{ <pending> }

// console.log('\n');

promise
.then( (response) => {
    console.log(promise);   // Promise { 'Promise Resolved after 2 seconds !!!' }
    console.log('\n');
    console.log(response);
    console.log('\n');
} );


// The following lines are executed before the above promise.then() code.

console.log(promise);   // Promise { <pending> }

console.log('\n');