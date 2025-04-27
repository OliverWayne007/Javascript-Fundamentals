"use strict";

// Functions with Objects and Arrays ------ chai aur code

console.log('\n');

function calculateCartPrice(...num)
{
    return num;
}

// ------------------------------------------------------------------------------------------------------------------------------------

console.log(calculateCartPrice());

console.log('\n');

// ----------------------------------------------------------------------------------------------------------------------------------

console.log(calculateCartPrice(2));

console.log('\n');

// ----------------------------------------------------------------------------------------------------------------------------------

console.log(calculateCartPrice(200 , 300));

console.log('\n');

// ----------------------------------------------------------------------------------------------------------------------------------

console.log(calculateCartPrice(200 , 400 , 500));

console.log('\n');

// --------------------------------------------------------------------------------------------------------------------------------

console.log(calculateCartPrice(200 , 300 , 400 , 500 , 1000 , 2000));

console.log('\n');

// ----------------------------------------------------------------------------------------------------------------------------------

function func(val1 , val2 , ...num)
{
    console.log("val1: " , val1);
    console.log("val2: " , val2);
    return num;
}

console.log(func(100 , 200 , 300 , 400 , 500));

console.log('\n');

// -------------------------------------------------------------------------------------------------------------------------------------

// Passing object as an argument in a function

const user = {
    username : "Arpit Singh" , 
    price : 199
};

function handleObject(anyObject)
{
    console.log(`Username is : ${anyObject.username} and Price is : ${anyObject.price}`);
}

handleObject(user);

console.log('\n');

handleObject( { username : "Oliver Queen" , price : 299} );

// -------------------------------------------------------------------------------------------------------------------------------------


// Passing array as an argument in a function

const myArray = [100 , 200 , 300 , 400];

function handleArray()

console.log('\n');