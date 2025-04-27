"use strict";

console.log('\n');


// Synchronous

[1 , 2 , 3 , 4 , 5].forEach( (element , index) => {
    console.log(`Element: ${element} and Index: ${index}\n`);
} );



// Asynchronous

// With Closure

function asyncForEach1(array)
{
    array.forEach( (element , index) => {
        setTimeout( () => {
            console.log(`Element: ${element} and Index: ${index}\n`);
        } , 1000);
    } );
}

asyncForEach1([1 , 2 , 3 , 4 , 5]);


// Without Closure

function Callback(element , index)
{
    console.log(`Element: ${element} and Index: ${index}\n`);
}

function asyncForEach2(array)
{
    array.forEach( (element , index) => {
        setTimeout( () => {
            Callback(element , index);
        } , 3000);
    } );
}


asyncForEach2( [1 , 2 , 3 , 4 , 5]);