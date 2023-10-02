// Using strict mode
"use strict";

console.log('\n');

const JUser = {
    name : "Arpit" ,
    "full_name" : "Arpit Singh" ,  
    age : 22 , 
    location : "Bhilai" , 
    isLoggedIn : false , 
    email : "arpit@gmail.com" , 
    lastLoginDays : ["Monday" , "Saturday"]
}

// Printing the object JUser
console.log(JUser);

console.log('\n');

// Accessing the properties/fields of the object JUser
console.log("JUser.name: " , JUser.name , '\n');

console.log(`JUser["email"]:  ${JUser["email"]}` , '\n');

console.log(`JUser["full_name"]:  ${JUser["full_name"]}` , '\n');

// Changing the properties of the object JUser
JUser.email = "singh.arpit@gmail.com";
JUser.isLoggedIn = true

// Printing the object JUser again
console.log(JUser);

console.log('\n');

// Adding functions to the object
JUser.getDetails = function(){
    console.log(`Name: ${this.full_name} , Age: ${this.age} , Email: ${this.email}`);
}

// Accessing the function added above
JUser.getDetails();

console.log('\n');

// Printing the JUser object again after adding the getDetails() function
console.log(JUser);

console.log('\n');

// Freezing the object JUser so that no further changes can be made to the object
Object.freeze(JUser);

// Checking if the object JUser is frozen or not
console.log("Object.isFrozen(JUser): " , Object.isFrozen(JUser) , '\n');

// Trying to change the properties of the object after freezing
// JUser.age = 23;  // TypeError: Cannot assign to read only property 'age' of object '#<Object>'
JUser.lastLoginDays.push("Sunday");  // Note: Even after freezing the object, we are still able to modify the reference types/objects.

// NOTE: Even after freezing the object, it is possible to modify the reference types or objects like the lastLoginDays array above.

// Printing the JUser object to check if any changes were made after freezing
console.log(JUser);

console.log('\n')

// NOTE: There is no way to unfreeze or unseal a frozen/sealed object in javascript. By freezing an object, we make it immutable.