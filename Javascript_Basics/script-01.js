// Truthy and Falsy values in Javascript

// Boolean value of undefined is false
let height;
console.log("The value of height is: " , height);
if(height)
{
    console.log("Yay !!! Height is defined !!!");
}
else
{
    console.log("Height is not defined !!!");
}

// Boolean value of empty string is also false
console.log(Boolean(""));
// Boolean value of non-empty string is true
console.log(Boolean("Arpit"));

// Boolean value of 0 is false
console.log(Boolean(0));
// Boolean value of any non-zero number is true
console.log(Boolean(100));
console.log(Boolean(-16));
console.log(Boolean(12.345));
console.log(Boolean(-12.345));

// Boolean value of null is false
console.log(Boolean(null));

// Boolean value of an empty object is false
console.log(Boolean({}));

// Boolean value of NaN is also false
console.log(Boolean(NaN));