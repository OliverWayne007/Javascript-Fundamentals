// Using strict mode
"use strict";

console.log('\n');

// Creating a set : Syntax -> let/const set_name = new Set(<Any Iterable>)
const orderSet = new Set(["Burger" , "Biryani" , "Pizza" , "Biryani" , "Burger"]);

console.log("Description of the orderSet: " , orderSet);

console.log('\n');

// NOTE : Strings are also iterable
const st = new Set("Oliver Queen");

console.log("Description of st: " , st);

console.log('\n');

// Set can also be empty
const emptySet = new Set();

console.log("Description of emptySet: " , emptySet);

console.log('\n');



// Set methods

// Finding the size/number of elements of the set
console.log("The number of unique elements in orderSet is: " , orderSet.size);

console.log('\n');

// Find if an element is present in the set or not
console.log("Checking if noodles is present in orderSet: " , orderSet.has("Noodles"));

console.log('\n');

// Adding elements to a Set
orderSet.add("Noodles");
orderSet.add("Pasta");
orderSet.add("Noodles");

console.log("Description of orderSet: " , orderSet);

console.log('\n');

// Deleting elements from the Set
const items_to_delete = ["Noodles" , "Pasta"];
items_to_delete.forEach( (item) => { orderSet.delete(item); } );

console.log("Description of orderSet: " , orderSet);

console.log('\n');