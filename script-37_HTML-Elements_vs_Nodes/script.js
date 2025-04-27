"use strict";

const parent_1 = document.querySelector(".parent-1");

console.log(parent_1);

console.log(parent_1.parentElement);

console.log(parent_1.parentNode);

// Note: HTMLCollection includes only HTML elements or tags like div, p, span, h1 etc. It does not include Text, Comments etc.

// Note: Everything other than the attributes are considered as a node in an HTML document. Even the Text and Comments are considered
// as nodes. Therefore, a NodeList contains all the HTML Elements along with Non-HTML Elements like Text, Comments etc. 

console.log(parent_1.childNodes);  // Returns a NodeList with one node that is the text "Parent-1" in this case.

console.log(parent_1.children);  // Returns an empty HTMLCollection.

const parent_2 = document.querySelector(".parent-2");

console.log(parent_2);

console.log(parent_2.parentElement);

console.log(parent_2.parentNode);

console.log(parent_2.children);

console.log(parent_2.childNodes);