// Using strict mode
"use strict";

console.log("Hey everybody what's up !!!");

console.log('\n');

/* -------------------------------------------------------------------------------------------------------------------------- */

// Examples of a callback function

// Defining the Callback function inside the setTimeout function
setTimeout( () => { console.log("Wait for it you mother-fucker !!! \n\n "); } , 5000 );

// Defining the Callback functions outside the setTimeout function
function clbck1() { console.log(`Hi , Iam a callback function without arguments !!!\n\n`); }

setTimeout( clbck1 , 3000 );   // Callback function clbk1 without any arguments

function clbk2(name) { console.log(`Hi ${name} , Iam a callback function with arguments !!! \n\n `); }

setTimeout( clbk2 , 4000 , "Oliver" );  // Callback function clbk2 with argument "Oliver"

/* ------------------------------------------------------------------------------------------------------------------------- */

console.log("Hey assholes !!!");

console.log('\n');

console.log("See you sometime !!!");

console.log('\n');

