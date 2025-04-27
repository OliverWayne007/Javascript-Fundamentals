"use strict";

console.log('\n');

// Primitive types such as Numbers, Strings, Booleans, undefined, null are all passed by value.
// In case of primitive types, we don't have t worry about any memory reference.

let a = 10;

console.log("The value of a is: " , a);

let b = a;

console.log("The value of b is: " , b);

b = b + 1;

console.log("The value of a is: " , a);

console.log("The value of b is: " , b);

// Note that variables c , d and e contain the memory-address of the non-primitive/reference types such as arrays, objects 
// in Javascript and not the actual array or object. This is why, even though the content of the arrays is same in case of
// the variables c and e, still the value of c is not equal to the value of e as the value present in c is the memory-address
// 0x01 while the value present in e is the memory-address 0x02. The value of variables c and d is equal because they contain the
// same memory-address that is 0x01. 

let c = [1 , 2 , 3];  // 0x01

let d = c;  // 0x01

let e = [1 , 2 , 3]; // 0x02

console.log("The value of c is: " , c);

console.log("The value of d is: " , d);

console.log("The value of e is: " , e);

console.log("d === c: " , d === c);

console.log("e === c: " , e === c);

c.push(4);

console.log("The value of c is: " , c);

console.log("The value of d is: " , d);

console.log("The value of e is: " , e);

e.push(5);

console.log("The value of c is: " , c);

console.log("The value of d is: " , d);

console.log("The value of e is: " , e);

console.log('\n');

function addElement(arr , ele)
{
    arr.push(ele);
}

console.log("The value of e is: " , e);

addElement(e , 10);  // (0x02 , 10) i.e arr contains the value of e which is 0x02

console.log("The value of e is: " , e);

console.log('\n');