// OBJECTS

// Using strict mode
"use strict";

// Creating an object

const Arrow = {
    firstName: "Oliver" ,
    lastName: "Queen" , 
    Age: 26 , 
    City: "Starling City" , 
    Profession: "Vigilante" , 
    Skill: "Archery" , 
    Friends: ["John Diggle" , "Felicity Smoak" , "Laurel Lance" , "Barry Allen"]
};

console.log("Description of Oliver: " , Arrow);

console.log('\n');

/* ---------------------------------------------------------------------------------------------------------------------------- */

// Using the dot notation to access the properties of an object
console.log("The firstName of the Arrow is: " , Arrow.firstName);
console.log("The lastName of the Arrow is: " , Arrow.lastName);
console.log("The age of the Arrow is: " , Arrow.Age);
console.log("The profession of the Arrow is: " , Arrow.Profession);
console.log("The city of the Arrow is: " , Arrow.City);
console.log("The skill of the Arrow is: " , Arrow.Skill);

// NOTE: When using the dot notation, we cannot use any expression instead of the property name. We have to use the exact property
//       name to access that property of the object. The dot operator treats the property name as an atomic variable
//       just like a variable/identifier in C++.

console.log('\n');

// In arrays, the order of the elements matters while accessing the elements whereas in Obects the order of the elements 
// does not matter.


// Using the Bracket notation to access the properties of an object
console.log(Arrow["firstName"]);
console.log(Arrow["first" + "Name"]);
// NOTE: While using the bracket notation, we can use expressions instead of the actual property name directly. The bracket
//       notation treats the property name like a value and not as a variable just like a key in a map in C++.

console.log('\n');

console.log(Arrow["Location"]);

console.log('\n');

let interestedIn = prompt("What do you want to know about the Arrow ??? Choose between firstName , lastName , Age , Skill and Profession.");
if(Boolean(Arrow[interestedIn]) === true)
{
    console.log(`The ${interestedIn} of the Arrow is: ` , Arrow[interestedIn]);
}
else
{
    console.log("No such information about the Arrow exists !!!");
}

console.log('\n');

/* ---------------------------------------------------------------------------------------------------------------------------- */

// Adding properties to an object using dot and bracket notation
Arrow.Sister = "Thea Queen";
Arrow["Wife"] = "Felicity Smoak";
console.log(Arrow);

console.log('\n');

Arrow.Friends.push("Tommy Merlyn");
Arrow["Friends"].push("Roy Harper");

// console.log(Arrow);

// CHALLENGE given by Jonas Schemdtman
console.log(`${Arrow.firstName} has ${Arrow["Friends"].length} friends and his best friend is ${Arrow.Friends[0]} !!!`);