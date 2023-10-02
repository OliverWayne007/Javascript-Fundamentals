console.log("Iam starting with the differences between the var and the let keyword in JavaScript !!!");
// Declaring a variable a using the var keyword:
var a = 12;
// Printing the value of a:
console.log("The value of a is: " , a);
// Redaclaring the value of a using the var keyword:
var a = 13;
// Printing the value of a again:
console.log("The value of a is: " , a);
// Modifying the value of a without using the var keyword
a = 14;
// Printing the value of a again:
console.log("The value of a is: " , a);

// Declaring a variable b using the let keyword:
let b = 16;
// Printing the value of b:
console.log("The value of b is: " , b);
// Redeclaring the value of b using the let keyword:
// let b = 17;
// Printing the value of b again:
// console.log("The value of b is: " , b);
// AN ERROR IS SHOWN IN THE CONSOLE STATING THAT b CANNOT BE REDECLARED USING THE let KEYWORD AS IT HAS ALREADY BEEN DECLARED !!!

// Declaring a variable c using the let keyword:
let c = 10;
// Printing the value of c:
console.log("The value of c is: " , c);
// Modifying the value of c without using the let keyword:
c = 20;
// Printing the value of c again:
console.log("The value of c is: " , c);
// NO ERROR IS SHOWN ON PERFORMING THE ABOVE OPERATION !!!



var shit = 100;
console.log("The value of shit is: " , shit);      // 100
{
    shit = 200;
    console.log("The value of shit is: " , shit);   // 200
}
console.log("The value of shit is: " , shit);       // 200



let piss = 50;
console.log("The value of piss is: " , piss);     // 50
{
    piss = 60;            
    console.log("The value of piss is: " , piss);    // 60
}
console.log("The value of piss is: " , piss);       // 60



let ass = 40;
console.log("The value of ass is: " , ass);       // 40
{
    let ass = 30;
    console.log("The value of ass is: " , ass);    // 30
}
console.log("The value of ass is: " , ass);        // 40



let poop = 80;
console.log("The value of poop is: " , poop);        // 80
{
    let poop = 70;
    console.log("The value of poop is: " , poop);    // 70
    poop = 90;
    console.log("The value of poop is: " , poop);    // 90
    // let poop = 70;
    // NOTE: THE ABOVE LINE OF CODE SHOWS AN ERROR STATING THAT poop has already been declared !!!
    poop = 70;
    console.log("The value of poop is: " , poop);    // 70
}
console.log("The value of poop is: " , poop);        // 80
poop = 110;
console.log("The value of poop is: " , poop);        // 110
// let poop = 80;
// NOTE: THE ABOVE LINE OF CODE SHOWS AN ERROR STATING THAT poop has already been declared !!!
poop = 80;
console.log("The value of poop is: " , poop);        // 80



var fart = 100;
console.log("The value of fart is: " , fart);        // 100
{
    var fart = 200;                                  // 200
    console.log("The value of fart is: " , fart);
}
console.log("The value of fart is: " , fart);        // 200



{
    let bitch = 120;  // THIS VARIABLE bitch HAS A LOCAL SCOPE.
}
// console.log(bitch);
// NOTE: THE ABOVE LINE OF CODE SHOWS AN ERROR STATING THAT bitch is not defined !!!



let fuck = 150; // THIS VARIABLE fuck HAS A GLOBAL SCOPE
{
    console.log("The value of fuck is: " , fuck);     // 150
}


// DECLARING A VARIABLE pee USING THE var KEYWORD 
// var pee = 180;
// DECLARING A VARIABLE pee AGAIN USING let KEYWORD 
// let pee = 160;
// NOTE: THE ABOVE LINE OF CODE SHOWS AN ERROR STATING THAT the identifier pee has already been declared !!!


// DECLARING A VARIABLE dick USING THE let KEYWORD
// let dick = 170;
// DECLARING A VARIABLE dick AGAIN USING THE var KEYWORD
// var dick = 190;
// NOTE: THE ABOVE LINE OF CODE SHOWS AN ERROR STATING THAT the identifier dick has already been declared !!! 



let Name = "Arpit Singh";
console.log("My name is: " , Name);
// The typeof operator is used to determine the type of a variable in javascript as shown below.
console.log("The datatype of the variable name is: " , typeof(Name));


// Concatenation of strings using '+' operator:
let first_name = "Oliver";
let last_name = "Queen";
let full_name = first_name + " " + last_name;
console.log("The full name is: " , full_name);
console.log("The length of the full_name is: " , full_name.length);
// Indexing in strings in javascript:
console.log(full_name[0] , full_name[1] , full_name[2] , full_name[3] , full_name[4] , full_name[5]);
// first_name = first_name + " " + last_name;
// console.log(first_name);


// Using trim() function in javascript:
let str = "   Bruce Wayne  ";
console.log("The value of str is: " , str);
console.log("The length of str is: " , str.length);
// Using trim() function
str.trim();
console.log("The length of str is still: " , str.length);
// This is because the trim() function creates a copy of string str and trims it i.e it does not make any changes in the
// original string.
let trimmed_str = str.trim();
console.log("The length of trimmed_str is: " , trimmed_str.length);
str = trimmed_str;
console.log("The length of str is: " , str.length);


// Using other string functions:
let st = "Oliver Wayne";
console.log("The value of st is: " , st);
st = st.toLowerCase();   // Using toLowerCase() function
console.log("The value of st is: " , st);
st = st.toUpperCase();   // Using toUpperCase() function
console.log("The value of st is: " , st);