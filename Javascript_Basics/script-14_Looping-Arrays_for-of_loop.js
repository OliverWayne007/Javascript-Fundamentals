// Using strict mode
"use strict";

console.log('\n');

// Note: In case of for-of loop, we can use continue and break statements. The for-of loop in javascript is just like the
//       for-each loop in C++.

let arr = ["Oliver Queen" , "Bruce Wayne" , "Matt Mordock" , "Tony Stark" , "Michael Scofield"];

for(let item of arr)
{
    console.log(item , " " , typeof(item) , '\n');
}

console.log('\n');

console.log(arr.entries() , '\n\n');

for(let item of arr.entries())
{
    console.log(item , " " , typeof(item) , '\n');
}

console.log('\n');

// Note: Each item in arr.entries() is an array.


// Creating a list of my favourite chracters using for-each loop

// Without destructuring the item array while looping

for(let item of arr.entries())
{
    console.log(`${item[0] + 1}: ${item[1]}` , '\n');
}

console.log('\n');

// By Destructuring the item array while looping

for(let [x , y] of arr.entries())
{
    console.log(`${x + 1}: ${y}` , '\n');
}

console.log('\n');