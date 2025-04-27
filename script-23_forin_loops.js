"use strict";

// Higher Order Array Loops ----- chai aur javascript

console.log('\n');

// ---------------------------------------------------------------------------------------------------------------------------------

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



// ---------------------------------------------------------------------------------------------------------------------------------

// Iterating arrays using forin loop

// Creating an array
const arr = [1 , 2 , 3 , 4 , 5];

// Printing the keys(indexes) of the array
for (const key in arr) {
    console.log(key);
}

console.log('\n');

// Printing the values of the array
for (const key in arr) {
    console.log(arr[key]);
}

console.log('\n');

// Printing the keys(indexes) and the corresponding values of the array
for (const key in arr) {
    console.log(key , " : " , arr[key]);
}

console.log('\n');


// -----------------------------------------------------------------------------------------------------------------------------------

// Iterating over maps using forin loops

// Creating a map
const map = new Map();

map.set("Oliver Queen" , "Green Arrow");
map.set("Bruce Wayne" , "Dark Knight");
map.set("Matt Murdock" , "Daredevil");
map.set("Tony Stark" , "Iron Man");

for (const key in map) {
    console.log(key);
}

// Note: When using forin loop to iterate over maps, no error is generated but nothing is printed. But why ???

console.log('\n');