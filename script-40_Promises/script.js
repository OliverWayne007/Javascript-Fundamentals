"use strict";

console.log('\n');

// Akshay-Saini Namaste Javascript-2

// A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

const cart = ["shoes" , "pants" , "kurta"];



// ---------------------------------------------------------------------------------------------------------------------------------


// Using Callbacks

// function createOrder(cart , proceedToPayment)
// {
//     console.log(cart);
//     console.log("Cart has been created !!!");
//     const orderID = Math.floor(Math.random() * 10);
//     if(orderID != 5)
//     {
//         console.log(`The orderID is: ${orderID}`);
//         console.log("Ooops ! Looks like something went wrong !!!");
//         return;
//     }
//     proceedToPayment(orderID);
// }


// Calling the function

// createOrder(cart , (orderID) => {
//     console.log("Order has been created !!!");
//     console.log(`The order ID is: ${orderID}`);
//     console.log("Welcome to the payment page !!!");
//     console.log("You can now proceed with the payment !!!");
// } );

// console.log('\n');

// Important points to note:
// Both createOrder and proceedToPayment APIs are Asynchronous in nature.
// The proceedToPayment API call is dependent on the createOrder API. The proceedToPayment function can be called after the createOrder
// function has finished execution.




// ---------------------------------------------------------------------------------------------------------------------------------


// Using Promises

function createOrder(cart)
{
    return new Promise( (resolve , reject) => {
        console.log(cart);
        console.log("Cart has been created !!!");
        const orderID = Math.floor(Math.random() * 10);
        if(orderID === 5)
        {
            resolve( { message: "Order has been created !!!" , orderID : orderID } );
        }
        else
        {
            // console.log(`The orderID is: ${orderID}`);
            reject( { error: "Oops ! Looks like something went wrong !!!" , orderID: orderID } );
        }
    } );
}

// const order = createOrder(cart);

// console.log(order);

// console.log('\n');

// order
// .then( (response) => {
//     console.log(response.message);
//     console.log("The orderID is: " , response.orderID);
//     console.log("Welcome to the payment page !!!");
//     console.log("You can now proceed with the payment !!!");
// } )
// .catch( (response) => {
//     console.log("The orderID is: " , response.orderID);
//     console.log(response.error);
// } )
// .finally( () => {
//     console.log("Promise Resolved !!!\n");
// } );


// for(let i = 1 ; i <= 1e10 ; i++) {}

// console.log("This line is written after the promise code but is executed before the promise code because promises are asynchronous and non-blocking !!!\n");



// -----------------------------------------------------------------------------------------------------------------------------------



// Using Async-Await

async function callCreateOrderFunction(cart)
{
    try
    {
        const response = await createOrder(cart);
        console.log(response.message);
        console.log("The orderID is: " , response.orderID);
        console.log("Welcome to the payment page !!!");
        console.log("You can now proceed with the payment !!!");
    }
    catch (response)
    {
        console.log("The orderID is: " , response.orderID);
        console.log(response.error);
    }
    finally
    {
        console.log("Promise Resolved !!!\n");
    }
}

// callCreateOrderFunction(cart);




// -----------------------------------------------------------------------------------------------------------------------------------


const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);

console.log(user);

console.log('\n');

user
.then( (response) => {
    console.log(user , '\n');
    console.log(response , '\n');
} )
.catch( (err) => {
    console.log(user , '\n');
    console.log(err , '\n');
} )
.finally( () => {
    console.log("Promise Resolved !!!\n");
} );

console.log("This line is written after the promise code but is executed before the promise code because promises are asynchronous and non-blocking !!!\n");

