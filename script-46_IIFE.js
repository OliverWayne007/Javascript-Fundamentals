"use strict";

console.log('\n');




// Hitesh Choudhary ------- Example


// (1) Using a normal function

function DBConnection(user)
{
    console.log(`DB Connected ${user} !!!\n`);
}

DBConnection("Oliver Queen");


// (2) Using Immediately Invoked Function Expressions (IIFE)

(function DBConnection1(user)
{
    console.log(`DB 1 Connected ${user} !!!\n`);
})("Bruce Wayne");


// NOTE: It is mandatory to end an IIFE with a semi-colon otherwise an error occurs.


( (user) => {
    console.log(`DB 2 Connected ${user} !!!\n`);
} )("Tony Stark");



// Code With Harry ----------- Example

