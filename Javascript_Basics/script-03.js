// Type conversion ------------ Explicit !!! Done Manually !!!
const inputyear = "1991";
console.log(Number(inputyear) , inputyear);
console.log(inputyear + 18);
console.log(18 + inputyear);
console.log(18 + Number(inputyear));

let str = "Oliver";
console.log(Number(str));  // The output generated is NaN which stands for not a number !!!

// The output of typeof(NaN) is given as number which does not make any sense. Therefore it is a bug in Javascript !!!
console.log(typeof(NaN));  

let num = 123;
console.log(String(num) , num);
console.log(typeof(String(num)));


// Type coersion ------------ Implicit !!! Done automatically !!!

console.log("I am " + 21 + " years old !!!");                 // Number is implicitly converted to string
console.log(5 - "2" , typeof(5 - "2"));                       // String is implicitly converted to number
console.log("23" - "10" - "3" , typeof("23" - "10" - "3"));   // String is implicitly converted to number
console.log("23" - "10" - 3 , typeof("23" - "10" - 3));       // String is implicitly converted to number
console.log("23" + "10" + 3 , typeof("23" + "10" + 3));       // Number is implicitly converted to string
console.log("23" * "2" , typeof("23" * "2"));                 // String is implicitly converted to number
console.log("23" * 2 , typeof("23" * 2));                     // String is implicitly converted to number
// console.log("24" / "2" , typeof("24" / "2"));
// console.log("24"/2 , typeof("24"/2));

// Observation:
// Only in case of the '+' operator, numbers are implicitly converted to strings otherwise in case of all other operators,
// strings are converted implicitly to numbers. This is because, only concatenation operation via the '+' operator is predefined
// in case of strings. For all the other operators, there is no such thing predefined in case of strings.


// Exercise on type coersion
let n = "1" + 1;
n = n - 1;
console.log(n , typeof(n));

console.log(2 + 3 + 4 + '5' , typeof(2 + 3 + 4 + '5'));