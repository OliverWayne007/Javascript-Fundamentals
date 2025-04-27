/* -----------------------------  BASIC ARRAY OPERATIONS ------------------------------- */

// (1) push(): Used to push an element to the end of the array.
// (2) pop(): Used to remove an element from the end of the array.
// (3) unshift(): Used to add an element to the begining of an array.
// (4) shift(): Used to remove an element from the begining of an array.
// (5) indexOf(): Used to find the index of an element in the array. If the element is not
//                present in the array then it returns -1.
// (6) includes(): Used to check if an element is present in the array or not. It uses the 
//                 strict equality operator to perform the check. Returns true if the
//                 element is present otherwise it returns false.


// Using strict mode
"use strict";

let friends = ["Oliver" , "Bruce" , "Matt"];
console.log(friends , friends.length);

console.log('\n');

friends.push("Tony");
console.log(friends , friends.length);

console.log('\n');

let popped = friends.pop();   // Returns the last popped element
console.log(friends , popped);

console.log('\n');

let len = friends.push("Tony"); // Returns the length of the array
console.log(friends , len);

console.log('\n');

let addElementAtStart = friends.unshift("Frank");   // Returns the length of the array
console.log(friends , addElementAtStart);

console.log('\n');

let popFromStart = friends.shift();   // Returns the last popped element
console.log(friends , popFromStart);

console.log('\n');

let index = friends.indexOf("Oliver");
console.log("The index of Oliver in the array is: " , index);

console.log('\n');

let idx = friends.indexOf("Frank");
console.log("The index of Frank in the array is: " , idx);

console.log('\n');

let isPresent = friends.includes("Oliver");
if(isPresent)
{
    console.log("You have a friend named Oliver !!!");
}
else
{
    console.log("You don't have any friend named Oliver !!!");
}