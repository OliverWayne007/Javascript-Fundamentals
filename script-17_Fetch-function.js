// Using strict mode
"use strict";

console.log('\n');

// Note: fetch() function returns a promise
let promiseReturned = fetch( "http://jsonplaceholder.typicode.com/posts" );
console.log( "The promise returned by the fetch() function is: " , promiseReturned );

console.log('\n');


// Using Async - Await

async function getData()
{
    let fetchResultFromServer = await fetch( "http://jsonplaceholder.typicode.com/posts" );
    console.log( fetchResultFromServer );
    console.log('\n');
}

getData();

console.log( "The getData() function is Asynchronous !!!" );
console.log( "The code execution will not stop and wait for the getData() function to complete and this line will get executed !!!" );

console.log('\n');


// Using Promise

fetch( "http://jsonplaceholder.typicode.com/posts" )
.then( (data) => { console.log( "The response recieved is: \n" , data ); console.log('\n'); } )
.catch( (error) => { console.log("The response recieved is: \n" , error ); console.log('\n'); } )
.finally( () => { console.log( "The execution of the fetch() function is now complete !!!\n" ); } );