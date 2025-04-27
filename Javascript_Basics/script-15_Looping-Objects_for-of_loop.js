// Using strict mode
"use strict";

console.log('\n');

const Arrow = {
    Name : "Oliver Queen" , 
    City : "Starling City" , 
    Associates : ["John Diggle" , "Felicity Smoak" , "Roy Harper" , "Thea Queen" , "Laurel Lance" , "Sara Lance" , "Nyssa Al Ghul"] , 
    Siblings : ["Thea Queen" , "Tommy Merlyn" , "Emiko Adachi"] , 
    Parents : ["Robert Queen" , "Moira Queen"] , 
    Girlfriends : ["Laurel Lance" , "Sara Lance" , "Samantha Clayton" , "Shado" , "Felicity Smoak" , "Susan Williams"] ,
    Wife : "Felicity Smoak" , 
    Villains : ["Malcolm Merlyn" , "Slade Wilson" , "Raas Al Ghul" , "Damien Darhk" , "Adrian Chase" , "Ricardo Diaz"]
};


// Looping over property names
console.log("Looping over property names: " , '\n');

// Object.keys(Arrow) returns an array of keys/property-names of the Arrow object
console.log(Object.keys(Arrow) , " " , typeof(Object.keys(Arrow)));

console.log('\n');

const arrowKeys = Object.keys(Arrow);

for(let key of arrowKeys)
{
    console.log(key);
}

console.log('\n');



// Looping over property values
console.log("Looping over property values: " , '\n');

// Object.values(Arrow) returns an array of values of the Arrow object
console.log(Object.values(Arrow) , " " , typeof(Object.values(Arrow)));

console.log('\n');

const arrowValues = Object.values(Arrow);

for(let value of arrowValues)
{
    console.log(value);
}

console.log('\n');



// Looping over the entire object
console.log("Looping over the entire object: " , '\n');

// Object.entries(Arrow) returns an array of key-value pairs of the Arrow object
console.log(Object.entries(Arrow) , " " , typeof(Object.entries(Arrow)));

console.log('\n');

const arrowObject = Object.entries(Arrow);

for(let item of arrowObject)
{
    console.log(item);
}

console.log('\n');

