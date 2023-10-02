// Using strict mode
"use strict";

console.log(this);   // Prints the global window object

console.log('\n');

console.log(this.Arrow);   // Prints undefined because there is no property called Arrow in the Window object

console.log('\n');

console.log(Arrow);   // Throws a reference error because variable Arrow is bieng used/printed before initialization

console.log('\n');

let Arrow = "Oliver Queen";   // Initialization of the Arrow variable

function PrintName (naam)
{
    console.log(`My name is ${naam} !!!`);
}

PrintName(Arrow);

console.log('\n');

const Jonas = {
    firstName: "Jonas" , 
    year: 1991 , 
    calcAge: function ()
    {
        console.log(this);
        console.log(2023 - this.year);
    } , 
    greet: () => { console.log(this); console.log(` Hey ${this.firstName} !!!`); }
};

Jonas.calcAge();

console.log('\n');

Jonas.greet();

console.log('\n');

console.log(window);

console.log('\n');

console.log(window.Jonas);  // Prints undefined !!! But why ???

// The reason for the above question is present in the official MDN documentation of the let and const keywords in Javascript.
// The reason is as follows:
// "Just like const the let does not create properties of the window object when declared globally (in the top-most scope)."

console.log('\n');

