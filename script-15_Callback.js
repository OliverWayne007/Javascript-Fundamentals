//Using strict mode 
"use strict";

// Scenario

// Register
// Send Email
// Login
// Get User Data
// Display User Data

/* ------------------------------ Without Callbacks ----------------------------------------------------------------------- */

// Creating functions for each of the above operations

// function register() {
//     setTimeout( () => { console.log("Register End !!!\n\n"); }  , 4000);
// }

// function sendEmail() {
//     setTimeout( () => { console.log("Email End !!!\n\n"); } , 2000 );
// }

// function login() {
//     setTimeout( () => { console.log("Login End !!!\n\n"); } , 3000 );
// }

// function getUserData() {
//     setTimeout( () => { console.log("Got user data !!!\n\n"); } , 1000 );
// }

// function displayUserData() {
//     setTimeout( () => { console.log("User data displayed !!!\n\n"); } , 1000 );
// }

// function otherApplicationWorks() {
//     console.log("Performing other application works !!!\n\n");
// }

// register();

// sendEmail();

// login();

// getUserData();

// displayUserData();

// otherApplicationWorks();

/* ------------------------------ Without Callbacks ----------------------------------------------------------------------- */





/* ------------------------------ With Callbacks ----------------------------------------------------------------------- */

// Creating functions for each of the above operations

function register( sendEmail ) {
    setTimeout( () => { console.log("User Registration Ends !!!"); sendEmail( login ); }  , 4000);
}

function sendEmail( login ) {
    setTimeout( () => { console.log("Email Sent !!!"); login( getUserData ); } , 2000 );
}

function login( getUserData ) {
    setTimeout( () => { console.log("User Login Ends !!!"); getUserData( displayUserData ); } , 3000 );
}

function getUserData( displayUserData ) {
    setTimeout( () => { console.log("User data recieved !!!"); displayUserData(); } , 1000 );
}

function displayUserData() {
    setTimeout( () => { console.log("User data displayed !!!"); } , 1000 );
}

function otherApplicationWorks() {
    console.log("Performing other application works !!!");
}

register( sendEmail );

otherApplicationWorks();

/* ------------------------------ With Callbacks ----------------------------------------------------------------------- */