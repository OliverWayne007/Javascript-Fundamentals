// Using strict mode
"use strict";


// Callback Function : A callback function is a function passed into another function as an argument, which is then 
// invoked inside the outer function to complete some kind of routine or action.


/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-1:


// let age = prompt("Enter your age: ");
// let name = prompt("Enter your name: ");

// function printAge (age)
// {
//     console.log("The age is: " , age);
// }

// function printName (func , name , age)
// {
//     console.log("The name is: " , name);
//     func(age);
// }

// printName( printAge , name , age );

// console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-2:


// function addTwoNumbers(x , y)
// {
//     console.log("The sum of the numbers is: " , x + y);
// }

// function illustrateCallback (callback)
// {
//     let num1 = Number(prompt("Enter the first number: "));
//     let num2 = Number(prompt("Enter the second number: "));
//     callback(num1 , num2);
// }

// illustrateCallback( addTwoNumbers );

// console.log('\n');


/* ------------------------------------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------------------------------------ */


// Example-3: Count the number of times the button is clicked without using Closure


// Without Closure

// let count = 0;

// document.getElementById("ClickMe").addEventListener("click" , () => {
//     console.log("Button Clicked !!!" , " " , ++count);
// } );


/* ------------------------------------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-3: Count the number of times the button is clicked using Closure


// With Closure

// function attachEventListener()
// {
//     let count = 0;
//     document.getElementById("ClickMe").addEventListener("click" , () => {
//         console.log("Button Clicked !!!" , " " , ++count);
//     });
// }

// attachEventListener();



/* ------------------------------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-4:

// function multiplyTwoNumbers(x , y)
// {
//     console.log("The product of the two numbers is: " , " " , x * y);
// }

// function demonstrateCallback(callback)
// {
//     let num1 = 10 , num2 = 20;
//     callback(num1 , num2);
// }

// demonstrateCallback( multiplyTwoNumbers );

/* ------------------------------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-5:  .........  "Ania Kubow"

function secondAction(message)
{
    console.log(message);
}

function firstAction(callback , message)
{
    console.log(message);
    setTimeout(callback , 2000);
}

// Callback functions with arguments
setTimeout( () => { 
    firstAction( () => { 
        secondAction("Iam the second action !!!") 
    } , "Iam the first action !!!" ) 
} , 5000);

/* ------------------------------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------------------------------ */

// Example-6:  Online Pizza Ordering Scenario  .......... "https://www.youtube.com/watch?v=QSqc6MMS6Fk"

// Steps involved:
// (1) Place an order for a Pizza
// (2) Track the status of your order
// (3) Order is delivered to your address
// (4) Eat your pizza
// (5) Rate the restaurant

// Following are the functions for the above mentioned activities:

// function orderPizza(callback)
// {
//     console.log("Order Recieved !!!");
//     callback();
// }

// function trackOrderStatus(callback)
// {
//     console.log("Food is bieng prepared !!!");
//     callback();
// }

// function pizzaDelivered(callback)
// {
//     console.log("Order is delivered !!!");
//     callback();
// }

// function eatPizza(callback)
// {
//     console.log("Enjoy your pizza !!!");
//     callback();
// }

// function rateOrder()
// {
//     console.log("Feedback is provided !!!");
// }

// // Calling the functions
// orderPizza( () => { 
//     trackOrderStatus( () => { 
//         pizzaDelivered( () => { 
//             eatPizza( () => { 
//                 rateOrder(); 
//             } ); 
//         } ); 
//     } ); 
// } );

// NOTE: This type of nested function calling is an example of Callback-Hell. It is difficult to understand and manage and 
//       hence not ideal. The solution for the callback-hell problem are Promises in javascript. 

/* ------------------------------------------------------------------------------------------------------------------------ */