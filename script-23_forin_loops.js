"use strict";

// Higher Order Array Loops ----- chai aur javascript

console.log('\n');

// Using forin loop to iterate over objects

// Creating an object
const myObj = {
    name : "Oliver Queen" , 
    universe : "DC" , 
    alias : "Green Arrow" , 
    friends : ["Laurel Lance" , "Sara Lance" , "John Diggle" , "Felicity Smoak" , "Roy Harper" , "Tommy Merlyn"] , 
    girlfriend : ["Felicity Smoak" , "Laurel Lance" , "Sara Lance" , "Shado" , "Susan Williams"] , 
    wife : "Felicity Smoak" , 
    siblings : ["Thea Queen" , "Emiko Adachi"],
    favourite_anime_character : ["Uchiha Itachi" , "Naruto" , "Uchiha Sasuke"]
};

// Printing the keys in the object
for (const key in myObj) {
    console.log(key);
}

console.log('\n');

// Printing the values in the object
for (const key in myObj) {
    console.log(myObj[key]);
}

console.log('\n');

// Printing the key and value of the object together
for (const key in myObj) {
    console.log("Key: " , key , " -> " , "Value: " , myObj[key]);
}

console.log('\n');

// Iterating arrays using forin loop

console.log('\n');