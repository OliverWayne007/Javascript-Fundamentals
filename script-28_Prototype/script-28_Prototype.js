"use strict";

console.log('\n');

// Prototype Chaining and Prototypal Inheritance

// a -> ap -> app

let a = {
    Name : "Harry Bhai" ,
    playThemeSong()
    {
        alert("New Theme Song Playing !!!");
    }
};

let ap = {
    Salary : 100000 , 
    playThemeSong()
    {
        alert("Old Theme Song Playing !!!");
    }
};

let app = {
    Age : 22 , 
    Gender: "Male"
};


console.log(a);

console.log('\n');

a.__proto__ = ap;

ap.__proto__ = app;

console.log(a);

console.log('\n');

console.log(a.Name);

console.log(a.Salary);

console.log(a.Age);

console.log(a.Gender);

console.log(a.playThemeSong());

console.log('\n');