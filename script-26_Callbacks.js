"use strict";

// --------------------------------------------------------------------------------------------------------------------------------------


// NOTE: In Javascript, functions are first-class citizens i.e. in Javascript, functions are treated just like variables and hence can 
// passed as arguments to other functions as well, as in case of callback functions, which is demonstrated below.


// -------------------------------------------------------------------------------------------------------------------------------------


// Advantages of using callback functions over calling a function from within another function without passing the "called" 
// function as an argument to the "caller" function:

// Benefit-1:

// One of the reasons callbacks are nifty is that you can call your function with any callback at all:

// hello(1, 2, myFunction1);
// hello(1, 2, myFunction2);
// ...
// hello(1, 2, anyFunctionAtAll);

// Without the possibility of passing a callback as an argument, your hello would be tied to always execute myFunction,
// since it's fixed on your function code.


// Benefit-2:

// You can call your myFunction as anonymous function

// function hello( a , b, callback ) {
//     var result = a + b; 
//     callback();
// }

// hello(1,2, function() {
//    // your stuff here
// });


// ------------------------------------------------------------------------------------------------------------------------------------


console.log('\n');

// ------------------------------------------------------------------------------------------------------------------------------------

const func = ( message , cb ) => {
    // Call the callback function cb as shown below
    cb(message);
};

func( "You have failed this city !!!" , (message) => {
    console.log(message);
    console.log('\n');
} );

// -------------------------------------------------------------------------------------------------------------------------------------

const logHello = () => { console.log("Hello"); };

// setTimeout( () => {
//     console.log("Hello");
// } , 5000);

setTimeout( logHello , 5000 );