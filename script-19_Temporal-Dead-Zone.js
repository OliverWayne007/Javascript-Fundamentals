// Using strict mode
"use strict";

console.log('\n');

// Temporal Dead Zone begins for 

let func = function(){
    console.log(letVar);
}

let letVar = "Oliver Queen";

func();