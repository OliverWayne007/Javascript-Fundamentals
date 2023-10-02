// Using strict mode
"use strict;"

// Demonstrating the difference between the primitive and reference data types

// Primitive DataTypes

let x = 23;   // Numbers are primitive datatypes
let y = x;
x = 34;
console.log(x , y);

let naam = "Arpit";    // Strings are primitive datatypes
let alias = "Oliver";
naam = "Bruce";
console.log(naam , alias);

// Reference DataTypes

// Arrays are also objects in JavaScript as the typeof() operator when applied to an array returns the type as object.
 
let arr1 = ["Oliver" , "Barry" , "Bond" , "Hunt"];    // Array is a reference datatype
let arr2 = arr1;
arr2[1] = "Bruce";
console.log(arr1 , " " , arr2);

// Objects are reference datatypes
let SuperHero1 = {
    Name: "Oliver Queen" , 
    Alias: "Arrow" , 
    Universe: "DC" ,
    GetSummary()
    {
        return `My name is ${this.Name}. I am known as the ${this.Alias}. I belong to the ${this.Universe} Universe !!!`;
    }
};

let SuperHero2 = SuperHero1;

SuperHero2.Name = "Tony Stark";
SuperHero2.Alias = "Iron Man";
SuperHero2.Universe = "Marvel";

console.log(SuperHero1 , " " , SuperHero2);

console.log("\n");

console.log("About the SuperHero in brief: " , SuperHero1.GetSummary());