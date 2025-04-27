// OBJECT METHODS

// Using strict mode
"use strict";

const Batman = {

    firstName: "Bruce" , 
    lastName: "Wayne" , 
    Birthyear: 1996 , 
    City: "Gotham City" ,
    Skill: "Hunting" ,
    Profession: "Vigilante" , 
    Friends: ["Jim Gordon" , "Rachel Dawes"] , 
    Girlfriend: "Selina Kyle" , 
    Father: "Thomas Wayne" , 
    Mother: "Martha Wayne" , 

    // calcAge: function() {return 2022 - this.Birthyear ;}
    // Function Expression inside an object is called method.
    calcAge: function() {this.Age = 2022 - this.Birthyear; return this.Age;} , 

    getSummary: function()
    {
        let summary = `${this.firstName} ${this.lastName} is a ${this.Profession} !!!`;
        return summary;
    }
};

console.log(Batman);

console.log('\n');

//let Age = Batman.calcAge();  // The object calling the calcAge() method is Batman.

console.log(`The Age of ${Batman.firstName} ${Batman.lastName} is: ` , Batman.calcAge());

console.log(`The Age of ${Batman.firstName} ${Batman.lastName} is: ` , Batman.Age);
console.log(`The Age of ${Batman.firstName} ${Batman.lastName} is: ` , Batman.Age);
console.log(`The Age of ${Batman.firstName} ${Batman.lastName} is: ` , Batman.Age);

console.log('\n');

console.log(Batman.getSummary());