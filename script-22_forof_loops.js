'use strict';

console.log('\n');

// Higher Order Array Loops ---- chai aur javascript

// for of loop
// const arr = [1 , 2 , 3 , 4 , 5];

// for (const num of arr) {
//     console.log(num);
// }

// console.log('\n');

// const objArr = [
//     {
//         name : "Oliver Queen" , 
//         age : 23 , 
//         alias : "Green Arrow"
//     } , 

//     {
//         name : "Bruce Wayne" , 
//         age : 23 , 
//         alias : "Batman"
//     } , 

//     {
//         name : "Tony Stark" , 
//         age : 23 , 
//         alias : "Iron Man"
//     }
// ];

// for (const obj of objArr) {
//     console.log(obj , '\n');    
// }

// console.log('\n');

// const greetings = "Hello World !!!";

// Without using backtiks
// for (const char of greetings) {
//     console.log("The character is: " , char);
// }

// console.log('\n');

// Using backtiks
// for (const character of greetings) {
//     console.log(`The character is: ${character}`);
// }

// Map in Javascript
const map = new Map();

map.set("Oliver Queen" , "Green Arrow");
map.set("Bruce Wayne" , "Dark Knight");
map.set("Tony Stark" , "Iron Man");
map.set("Matt Murdock" , "Daredevil");

console.log(map);

console.log('\n');

console.log(`The size of the map is: ${map.size}`);

console.log('\n');

console.log(map.values());

console.log('\n');

console.log(`The map has Tony Stark as a key: ${map.has("Tony Stark")}`);

console.log('\n');

console.log(`Printing the entries of the map:` , '\n' , map.entries());

console.log('\n');

// Adding an entry which is already added in the map before
map.set('Tony Stark' , 'Iron Man');

// Printing the entries of the map to see if the repeated entry got added into the map or not
console.log("The entries of the map are: " , map.entries());

console.log('\n');

// Using forof loop to print the entries of the map
let counter = 1;
for (const entry of map) {
    console.log(`Entry #${counter} of the map is: ` , entry);
    counter++;
}

console.log('\n');

// Using forof loop to print key and value of an entry in the map, separately without using array destructuring
for (const entry of map) {
    console.log(`Key: ${entry[0]} -> Value : ${entry[1]}`);
}

console.log('\n');

// Using forof loop to print the key and value of an entry in the map, separately by using array destructuring
for (const [key , value] of map) {
    console.log("Key : " , key , " -> " , "Value : " , value);
}

console.log('\n');



// Using forof loop to iterate over objects

// Creating an object
const myObj = {
    name : "Oliver Queen" , 
    universe : "DC" , 
    alias : "Green Arrow" , 
    friends : ["Laurel Lance" , "Sara Lance" , "John Diggle" , "Felicity Smoak" , "Roy Harper" , "Tommy Merlyn"] , 
    girlfriend : ["Felicity Smoak" , "Laurel Lance" , "Sara Lance" , "Shado" , "Susan Williams"] , 
    wife : "Felicity Smoak" , 
    siblings : ["Thea Queen" , "Emiko Adachi"]
};


for (const data of myObj) {
    console.log(data);
}

// NOTE: When we try to iterate over an object using forof loop, the following error occurs:
// TypeError: myObj is not iterable

// Hence, we cannot iterate over objects using forof loop.

// Reason: According to me, this is because, an object is a single entity and not a container like arrays or maps.
// Note that an array is a collection of objects and a map is also a collection of arrays(containing a key and a value). 
// Therefore, we cannot iterate over objects using forof loops.

console.log('\n');