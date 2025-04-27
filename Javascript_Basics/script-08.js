// Using strict mode
"use strict";

// Declaration of an array
let friends = ["Oliver" , "Bruce" , "Matt"];   // Literal way of declaring and initializing an array

console.log(friends);

console.log('\n');

let years = new Array(2000 , 2001 , 2002 , 2005);   // Another way of declaring and initializing an array
console.log(years);

console.log('\n');

console.log("The length of the friends array is: " , friends.length);

console.log("The value of friends[0] is: " , friends[0]);
console.log("The value of friends[1] is: " , friends[1]);
console.log("The value of friends[2] is: " , friends[2]);

console.log('\n');

friends[2] = "Eobard";
console.log(friends);

friends.pop();            // pop() function is used to remove the last added element in the array
console.log(friends);
friends.push("Barry");    // push() function can be used to add an element to the end of the array
console.log(friends);

console.log('\n');

// NOTE: Only primitive types are immutable. But array is an object and objects are non-primitive datatypes. Hence it is mutable.


// Array containing elements of different data types
let mixTypes = ["Arpit" , 1 , true , [1, 2 ,3] , null , undefined];
console.log(mixTypes.length);
console.log(mixTypes);

console.log('\n');

for(let i = 0 ; i < mixTypes.length ; i++)
{
    console.log(typeof(mixTypes[i]));
}

console.log(mixTypes[3] , typeof(mixTypes[3]));
