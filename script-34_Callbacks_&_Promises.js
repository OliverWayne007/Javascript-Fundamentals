"use strict";

// This example is taken from Kyle's video on Promises on his channel Web Dev Simplified

console.log('\n');

// Using Callbacks

let userLeft = false;

let userWatchingCatMemes = false;

function WatchTutorialCallback(callback , errorCallback)
{
    if(userLeft)
    {
        errorCallback
        (
            {
                name: "User Left" , 
                message: ":("
            }
        )
    }
    else if(userWatchingCatMemes)
    {
        errorCallback
        (
            {
                name: "User Watching Cat Meme" , 
                message: "WebDevSimplified < Cat"
            }
        )
    }
    else
    {
        callback("Thumbs Up and Subscribe !!!");
    }
}

WatchTutorialCallback( (message) => {
    console.log("Success" + " " + message);
} , (error) => {
    console.log(`${error.name} ${error.message} !!!`);
});

console.log('\n');



// Using Promises

function WatchTutorialPromise()
{
    const promise = new Promise( (resolve , reject) => {
        if(userLeft)
        {
            reject( { name: "User Left" , message: ":(" } );
        }
        else if(userWatchingCatMemes)
        {
            reject( { name: "User Watching Cat Meme" , message: "WebDevSimplified < Cat" } );
        }
        else
        {
            resolve("Thumbs Up and Subscribe !!!");
        }
    } );
    
    return promise;
}

WatchTutorialPromise()
.then( (message) => {
    console.log("Success " + message);
} )
.catch( (error) => {
    console.log(`${error.name} ${error.message}`);
} )
.finally( () => {
    console.log("Thank you for your time !!!\n");
} );