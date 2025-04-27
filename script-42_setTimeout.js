"use strict";

console.log('\n');

setTimeout(function() {
    console.log("First\n");
} , 2000);

setTimeout(() => {
    console.log("Second\n")
} , 1000);

setTimeout(function() {
    console.log("Third\n");
} , 1000);

setTimeout( () => {
    console.log("Fourth\n");
} , 1000);