
// Equality operators == vs ===

// == is called loose equality operator as it performs type-coersion whenever required
console.log("18" == 18);

// === is called strict equality operator as it does not perform any type-coersion
console.log("18" === 18);

// In Javascript, in order to avoid any unwanted bugs, we should always use the strict equality operator to perform any 
// comparison. We should avoid using the loose equality operator as much as possible.

// How to take user input in Javascrippt ???
// In Javascript we take user input using the prompt command.
// The prompt command behaves in the same way as cin in C++ or scanner in Java.
// The user input received by the prompt command is always a string 

// Converting the user input received in the form of a string to a number and storing it into the variable favourite
const favourite = Number((prompt("What is the name of your favourite Super-Hero ???")));
console.log("The name of your favourite Super-Hero is: " , favourite);
// The user input received by the prompt command is always a string
console.log(typeof(favourite));

if(favourite == 7)
{
    console.log("Cool ! 7 is an amazing number !!!");
}
else
{
    console.log("Favourite is not equal to 7 !!");
}

if(favourite === 7)
{
    console.log("Cool ! 7 is an amazing number !!!");
}
else
{
    console.log("Favourite is not equal to 7 !!");
}