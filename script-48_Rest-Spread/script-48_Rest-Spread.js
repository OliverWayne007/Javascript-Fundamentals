"use strict";

let obj = {
    a: 1 , 
    b: 2 , 
    c: 3
};

console.log("obj: " , obj , '\n');

let obj1 = { ...obj };  // Spread operator

console.log("obj1: " , obj , '\n');

let arr = [1 , 2 , "Oliver Queen" , 3 , "Bruce Wayne" , 4 , "Tony Stark"];

console.log("arr: " , arr , '\n');

let arr1 = [ "Matt Murdock" , ...arr ];  // Spread operator

console.log("arr1: " , arr1 , '\n');

let [a , b , ...rest] = arr;   // Rest operator

console.log("a: " , a , '\n');

console.log("b: " , b , '\n');

console.log("rest: " , rest , '\n');

const someObj = { ...true , ..."test" , ...10 };   // Spread operator

console.log("someObj: " , someObj , '\n');


// --------------------------------------------------------------------------------------------------------------------------------

const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// A rest parameter must be last in a parameter list.

function add(a , b , ...nums)  // Rest Operator: Used as a parameter-list
{
    console.log(arguments);
    console.log('\n');

    console.log("a: " , a , '\n');
    console.log("b: " , b , '\n');

    console.log("nums: " , nums , '\n');

    let sum = 0;
    nums.forEach( (num) => {
        sum += num;
    });
    console.log("sum: " , sum);
}

add(1 , 2 , 3 , 4 , 5);

console.log('\n');

add(0 , 11 , 12 ,  ...nums , 13 , 14 , 15);  // Spread Operator: Used as an argument-list