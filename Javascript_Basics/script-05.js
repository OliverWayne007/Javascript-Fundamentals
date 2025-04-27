// This tutorial illustrates the importance of strict mode in Javascript

"use strict";

let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriversLicence = true;

if(hasDriversLicence) console.log("I can Drive !!!");

//const interface = true;    Uncaught SyntaxError: Unexpected strict mode reserved word
//const private = 534;       Uncaught SyntaxError: Unexpected strict mode reserved word