"use strict";

console.log('\n');

// This example is taken from Kyle's (Channel: Web Dev Simplified) video on Async-Await

// Using Promises

function makeRequest(location)
{
    return new Promise( (resolve , reject) => {
        console.log(`Making request to ${location} !!!`);
        if(location === "Google")
        {
            resolve("Google says Hi !!!");
        }
        else
        {
            reject("Sorry ! We can only talk to Google !!!");
        }
    } );
}

function processResponse(response)
{
    return new Promise( (resolve , reject) => {
        console.log("Processing the response !!!");
        resolve(`Some extra information + ${response}`);
    } );
}

// const promiseReturned = makeRequest("Google");

// console.log(promiseReturned);

// console.log('\n');

// Calling the function

// makeRequest("Google")
// .then( function(message) {
//     console.log("Response Recieved !!!");
//     return processResponse(message);
// } )
// .then( (res) => { console.log(res); } )
// .catch( (err) => {
//     console.log(err);
// } )
// .finally( () => {
//     console.log("Promise Resolved !!!\n");
// } );


// Using Async-Await

async function doWork()
{
    try
    {
        const response = await makeRequest("Meta");
        console.log(`The response recieved is: ${response}`);
        console.log("Response Recieved !!!");
        const processedResponse = await processResponse(response);
        console.log(processedResponse);
        console.log('\n');
    }
    catch(err)
    {
        console.log(err);
        console.log('\n');
    }
}

doWork();