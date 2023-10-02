console.log("Please Remember: JavaScript is a Dynamic Language !!!");
//alert("me");
"use strict";
document.write("Hello there , Iam writing in this document using document.write() !!!");
console.log("Hello World !!!");
var number1 = 34;
console.log("The value of number1 is: " , number1);
var number2 = 56;
console.log("The value of number2 is: " , number2);
console.log("The value of number1+number2 is: " , number1 + number2);
var shit1 = 56;
console.log("The value of shit1 is: " , shit1);
var shit2 = 34;
console.log("The value of shit2 is: " , shit2);
shit2 = 43;
console.log("The value of shit2 is: " , shit2);
console.log("The value of shit1-shit2 is: " , shit1-shit2);
console.warn("This is a warning !!!");
console.error("This is an error !!!");

// DATA TYPES IN JAVASCRIPT
// THERE ARE 3 DATATYPES IN JAVASCRIPT:
// 1. Number
// 2. String
// 3. Object
// 4. Boolean
// 5. undefined
// 6. null
// 7. symbol

// Example of a Number DataType:
var num = 56.786;
var num = 75;

// Example of a String DataType:
var str1 = "This is a string !!!";
var str2 = 'This is also a string !!!';

// Example of an Object DataType:
var marks = 
{
   Ravi:34,
   Shubham:78,
   Harry:99.99,
   Dovi:100
}
// NOTE: The object DataType stores key-value pairs.

// Example of boolean DataType:
var a = true;
var b = false;

console.log("The value of num is: " , num);
console.log("The value of str1 is: " , str1);
console.log("The value of str2 is: " , str2);
console.log("The value of marks is: " , marks);
console.log("The value of a is: " , a);
console.log("The value of b is: " , b);

// Example of undefined DataType:
var und = undefined;
console.log("The value of und is: " , und);
// NOTE: BY DEFAULT , IF NOT SPECIFIED , THE DATATYPE OF A VARIABLE IS ASSUMED TO BE undefined.
var nude;
console.log("The value of nude is: " , nude);
console.log(undefined);

// Example of null DataType:
var n = null;
console.log("The value of n is: " , n);

// AT A VERY HIGH LEVEL THERE ARE PRIMARILY TWO TYPES OF DATATYPES IN JAVASCRIPT:
// 1. Primitives: number , string , null , undefined , boolean , symbol
// 2. Non-Primitive/Reference Data types: Arrays and Objects.

// Example of Array DataType:
var arr = [1,2,3,4,5];
console.log("Printing the array arr: ");
console.log(arr);
console.log("The value of arr[0] is: " , arr[0]);
console.log("The value of arr[1] is: " , arr[1]);
console.log("The value of arr[2] is: " , arr[2]);
console.log("The value of arr[3] is: " , arr[3]);
console.log("The value of arr[4] is: " , arr[4]);

var array = [10,11,"Oliver Queen",16.57,true];
console.log("Printing the array: ");
console.log(array);
console.log("The value of array[0] is: " , array[0]);
console.log("The value of array[1] is: " , array[1]);
console.log("The value of array[2] is: " , array[2]);
console.log("The value of array[3] is: " , array[3]);
console.log("The value of array[4] is: " , array[4]);
// In JavaScript the Array DataType is just a collection of elements of any DataTypes.
// In JavaScript the DataType of the elements of an Array DataType need not be the same(like in c/c++), they can be different.

// TYPES OF OPERATORS IN JAVASCRIPT:
// 1. ARITHMETIC OPERATORS -> +,-,*,/
// 2. ASSIGNMENT OPERATORS -> =,+=,-=,*=,/=
// 3. COMPARISON OPERATORS -> ==,>,<,>=,<=
// 4. LOGICAL OPERATORS -> &&,||,!

// COMPARISON OPERATORS
var x = 100 , y = 10;
console.log("The value of 100==10 is: " , x==y);
console.log("The value of 100>10 is: " , x>y);
console.log("The value of 100<10 is: " , x<y);
console.log("The value of 100>=10 is: " , x>=y);
console.log("The value of 100<=10 is: " , x<=y);

// LOGICAL OPERATORS
// Logical && operator(AND)
console.log("The value of true && true is: " , true && true);
console.log("The value of false && false is: " , false && false);
console.log("The value of true && false is: " , true && false);
console.log("The value of false && true is: " , false && true); 
// Logical || operator(OR)  
console.log("The value of true || true is: " , true || true);
console.log("The value of false || false is: " , false || false);
console.log("The value of true || false is: " , true || false);
console.log("The value of false || true is: " , false || true);
// Logical ! operator(NOT)
console.log("The value of !true is: " , !true);
console.log("The value of !false is: " , !false);

// FUNCTIONS IN JAVASCRIPT
function avg(a,b)
{
    c = (a+b)/2;
    return c;
}
var c1 = avg(10,20);
console.log("The value of c1 is: " , c1);
var c2 = avg(10,16);
console.log("The value of c2 is: " , c2);

// CONDITIONALS IN JAVASCRIPT
// var age = 20;
// age = 15;
   age = 10;
// age = 35;
if(age>18 && age<21)
{
    console.log("You can drive a car !!!");
}
else if(age<18 && age>16)
{
    console.log("You cannot drive a car !!!");
}
else if(age>21)
{
    console.log("You are an adult !!!");
}
else if(age<16 && age>12)
{
    console.log("You are not mature enough to make your own descisions !!!");
}
else
{
    console.log("You are just a kid !!!");
}
console.log("END OF CONDITIONALS !!!");

console.log("Iam back !!! Hope you missed me !!!");

// RULES FOR NAMING VARIABLES IN JAVASCRIPT
// 1. You cannot start the name of a variable with a number.
// 2. You can only use underscore i.e _ or dollar i.e $ symbol in the variable name among all special characters.
// 3. You cannot use spaces in a variable name.

console.log("Now , I will be resuming with loops in JavaScript !!!");

// LOOPS IN JAVASCRIPT
var array = [1,2,3,4,5];
console.log("Using for loop to print the elements of the array: ");
for(let i = 0 ; i < array.length ; i++)     // NOTE: HERE VARIABLE i HAS A LOCAL SCOPE
{
   console.log(array[i]);
}

console.log("Another method to print the elements of the array is by using forEach loop !!!");
console.log("Using forEach loop to print the elements of the array: ");
array.forEach(function(element)
{console.log(element);})

console.log("Using while loop to print the elements of the array: ");

let j = 0;     // NOTE: HERE VARIABLE i HAS A GLOBAL SCOPE
while(j < array.length)
{
   console.log(array[j]);
   j++;
}

console.log("Using do-while loop to print the elements of the array: ");

let k = 0;    // NOTE: HERE VARIABLE k HAS A GLOBAL SCOPE
do
{
    console.log(array[k]);
    k++;
}
while(k<array.length);


// AND HERE THE JAVASCRIPT TUTORIAL ENDS !!! HOPE YOU ENJOYED IT !!! THANK YOU & GOOD LUCK !!!