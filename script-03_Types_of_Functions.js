// Using strict mode
"use strict;"

// Normal Function
function Hello1()
{
    return "Hello World !!!";
}

function sum1(a , b)
{
    return a + b;
}

function isPositive1(num)
{
    return num > 0;
}

function RandomNumber1()
{
    return Math.trunc(Math.random() * 10);
}



// Function Expression
let sum2 = function(a , b)
{
    return a + b;
}

let Hello2 = function(){
    return "Hello World !!!";
}

let isPositive2 = function(num) {return num > 0 ;}

let RandomNumber2 = function() {
    return Math.trunc(Math.random() * 10);
}



// Arrow Functions
let sum3 = (a , b) => {return a + b ;}

let Hello3 = (a , b) => {return "Hello World !!!" ;}

let isPositive3 = (num) => {return num > 0 ;}

let RandomNumber3 = () => {return Math.trunc(Math.random() * 10) ;}

/* --------------------------------------------------------------------------------------------------------------- */

let a = 10 , b = 20 , num = 50;

console.log(Hello1() , typeof(Hello1) , typeof(Hello1()));   // Calling the Normal Function
console.log(Hello2() , typeof(Hello2) , typeof(Hello2()));      // Calling the Function Expression
console.log(Hello3() , typeof(Hello3) , typeof(Hello3()));      // Calling the Arrow Function

console.log(sum1(a , b) , typeof(sum1) , typeof(sum1()));   // Calling the Normal Function
console.log(sum2(a , b) , typeof(sum2) , typeof(sum2()));      // Calling the Function Expression
console.log(sum3(a , b) , typeof(sum3) , typeof(sum3()));      // Calling the Arrow Function

console.log(isPositive1(num) , typeof(isPositive1) , typeof(isPositive1(num)));   // Calling the Normal Function
console.log(isPositive2(num) , typeof(isPositive2) , typeof(isPositive2(num)));      // Calling the Function Expression
console.log(isPositive3(num) , typeof(isPositive3) , typeof(isPositive3(num)));      // Calling the Arrow Function

console.log(RandomNumber1() , typeof(RandomNumber1) , typeof(RandomNumber1()));   // Calling the Normal Function
console.log(RandomNumber2() , typeof(RandomNumber2) , typeof(RandomNumber2()));      // Calling the Function Expression
console.log(RandomNumber3() , typeof(RandomNumber3) , typeof(RandomNumber3()));      // Calling the Arrow Function