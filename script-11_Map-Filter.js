// Using strict mode
"use strict";

const companies = [
    { Name: "Google" , Category: "Product Based" , Start: 1981 , End: 2004 } , 
    { Name: "Amazon" , Category: "Product Based" , Start: 1992 , End: 2008 } , 
    { Name: "Paytm" , Category: "Service Based" , Start: 1999 , End: 2007 } , 
    { Name: "Coforge" , Category: "Service Based" , Start: 1989 , End: 2010 } , 
    { Name: "MindTree" , Category: "Service Based" , Start: 1989 , End: 2010 }
];

const Ages = [ 33 , 12 , 20 , 16 , 5 , 54 , 21 , 44 , 61 , 13 , 15 , 45 , 25 , 64 , 32 ];

for(let i = 0 ; i < companies.length ; i++)
{
    console.log(companies[i]);
}

console.log('\n');

companies.forEach( (company) => { console.log(company); } )

console.log('\n');

// Filter the elements of the array based on some condition using for-loop
const new_age1 = [];
for(let i = 0 ; i < Ages.length ; i++)
{
    if(Ages[i] > 16)
    {
        new_age1.push(Ages[i]);
    }
}
console.log(new_age1);

console.log('\n');

// Filtering the elements of the array Age using filter
const new_age2 = Ages.filter( (age) => { if(age > 16) {return true;} return false; } );
console.log(new_age2);

console.log('\n');

// Filtering the elements of the array companies using filter
const serviceBasedCompanies = companies.filter( (company) => { 
    if(company.Category === "Service Based")
    {
        return true;
    }
    return false;
});

console.log(serviceBasedCompanies);

console.log('\n');

// Using the map function to create a new array from a given array
const transformedArray = Ages.map( (age) => {return 2 * age} );
console.log(transformedArray);

console.log('\n');