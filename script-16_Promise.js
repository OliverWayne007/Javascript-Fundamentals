// Using strict Mode
"use strict";

console.log('\n');

const myPromise = new Promise( (resolve , reject) => {

    let randomNum = Math.floor(Math.random() * 2);
    if(randomNum === 1)
    {
        resolve("Promise is fulfilled !!!");
    }
    else
    {
        reject("Promise is rejected !!!");
    }

} );


console.log(myPromise , typeof(myPromise));

myPromise
.then( (myPromiseResult) => { console.log( "Success !!!\nThe Promise result is: " , myPromiseResult ); } )
.catch( (myPromiseResult) => { console.error( "Something went wrong !!!\nThe Promise result is: " , myPromiseResult ) } )
.finally( () => { console.log('\n'); } );

//console.log('\n');   // This line is getting executed before the ".then" and the ".catch" line. Why ???
// Ans: This is because promises are asynchronous !!!

// myPromise.catch( (promiseResult) => { console.error( "Something went wrong !!!\nThe promise result is: " , promiseResult ) } );