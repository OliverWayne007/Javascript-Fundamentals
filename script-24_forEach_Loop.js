"use strict";

// High Order Array Loops ----- chai aur Javascript

console.log('\n');

// Using forEach loop to iterate over an array

const coding = ["Python" , "C++" , "Java" , "Javascript"];

// ------------------------------------------------------------------------------------------------------------------------------------

coding.forEach( function(item) {
    console.log(item);
} );

console.log('\n');

// -----------------------------------------------------------------------------------------------------------------------------------

coding.forEach( (item) => {
    console.log(item);
} )

console.log('\n');

// -----------------------------------------------------------------------------------------------------------------------------------

function PrintMe(item)
{
    console.log(item);
}

coding.forEach(PrintMe);

console.log('\n');

// -------------------------------------------------------------------------------------------------------------------------------------

coding.forEach( (item , index , arr) => {
    console.log(item , " " , index , " " , arr);
} );

console.log('\n');


// ------------------------------------------------------------------------------------------------------------------------------------

const myCoding = [
    {
        languageName: "Javascript" , 
        languageFileName: "js"
    } , 

    {
        languageName : "Java" , 
        languageFileName : "java"
    } , 
    
    {
        languageName : "Python" , 
        languageFileName : "py"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName , " : " , item.languageFileName);
} );

console.log('\n');