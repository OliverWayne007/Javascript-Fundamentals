// alert("Yo what's up motherfucker !!!!");

// console.log(window);

// console.log(document);

const heading1 = document.getElementById("heading1").innerText;

console.log(heading1);

console.log('\n');

const headingClassElements = document.getElementsByClassName("headingClass");

console.log(headingClassElements);

console.log('\n');

console.dir(headingClassElements);

console.log('\n');

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

console.log('\n');

console.log(document.querySelector("p"));

console.log('\n');

console.log(document.querySelectorAll("p"));

console.log('\n');

console.log(document.querySelector(".headingClass"));

console.log('\n');

console.log(document.querySelectorAll(".headingClass"));

console.log('\n');

console.log(document.querySelector("#button"));

console.log('\n');

console.log(document.querySelector("#button").tagName);

console.log('\n');

console.log(document.querySelector("#heading1").tagName);

console.log('\n');

console.log(document.querySelector("p").tagName);

console.log('\n');

console.log(document.querySelector("div").innerText);

console.log('\n');

console.log(document.querySelector("div").innerHTML);

document.querySelector("#heading3").innerText += " from Oliver Queen";

