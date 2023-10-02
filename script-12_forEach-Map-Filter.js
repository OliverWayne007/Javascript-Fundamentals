// Using strict mode
"use strict";

// Creating the array arr with the const keyword

const arr = [21 , 23 , 54 , 87 , 95];
console.log(arr);

console.log('\n');

// Traversing the array using forEach() method
arr.forEach( (element , index) => { console.log(`${element} : ${index}`); } );

console.log('\n');

// Modifying the original array arr using forEach() method
arr.forEach( (element , index) => { arr[index] = 2 * element; } )
console.log(arr);


// NOTE: forEach() method can mutate the original array arr on which it is called.
// NOTE: forEach() method does not create and return a new array by itself. Therefore, no new 
//       assignment to the constant variable arr takes place in forEach() method. Hence, it is possible
//       to modify the original array arr as shown above even if it is declared with a const keyword. 


console.log('\n');


/* ------------------------------------------------------------------------------------------------ */

// Modifying the original array arr using map method
// arr = arr.map( (element , index) => { return element + index; } );
// console.log(arr);


// NOTE: map() method cannot mutate the original array arr on which it is called.
// NOTE: map() method creates and returns a new array by itself. Therefore, a new assignment to 
//      the constant variable arr takes place in map() method and the following error is thrown: 
//      "script-11.js:28 Uncaught TypeError: Assignment to constant variable.". Hence, it is not 
//      possible to modify the original array arr as shown above if it is declared with a const keyword.



// console.log('\n');


// Modifying the original array arr using filter method
// arr = arr.filter( (element) => { return element > 100; } )
// console.log(arr);


// NOTE: filter() method cannot mutate the original array arr on which it is called.
// NOTE: filter() method creates and returns a new array by itself. Therefore, a new assignment to 
//      the constant variable arr takes place in map() method and the following error is thrown: 
//      "script-11.js:28 Uncaught TypeError: Assignment to constant variable.". Hence, it is not 
//      possible to modify the original array arr as shown above if it is declared with a const keyword.


/* ------------------------------------------------------------------------------------------------ */


// Creating the array nums with the let keyword

let nums = [21 , 23 , 54 , 87 , 95];
console.log(nums);

console.log('\n');

// Traversing the array using forEach() method
nums.forEach( (element , index) => { console.log(`${element} : ${index}`); } );

console.log('\n');

// Modifying the original array arr using forEach() method
nums.forEach( (element , index) => { nums[index] = 2 * element; } )
console.log(nums);

console.log('\n');

// Modifying the original array arr using map method
nums = nums.map( (element , index) => { return element + index; } );
console.log(nums);

console.log('\n');

// Modifying the original array arr using filter method
nums = nums.filter( (element) => { return element > 100; } )
console.log(nums);

console.log('\n');