"use strict";

// document.querySelector("#apple").addEventListener("click" , () => {
//     alert("Apple Clicked !!!");
// } );

// document.querySelector("#watermelon").addEventListener("click" , () => {
//     alert("Watermelon Clicked !!!");
// } );

// document.querySelector("#kiwi").addEventListener("click" , () => {
//     alert("Kiwi Clicked !!!");
// } );

// document.querySelector("#banana").addEventListener("click" , () => {
//     alert("Banana Clicked !!!");
// } );

// document.querySelector("#grapes").addEventListener("click" , (event) => {
//     console.log(event);
//     alert("Grapes Clicked !!!");
// } );


document.addEventListener("DOMContentLoaded" , () => {

    const fruits = document.querySelectorAll(".fruits");

    // apple.addEventListener("mouseover" , function() {
    //     apple.textContent = "Do you like apples ???";
    // } );

    // apple.addEventListener("mouseout" , function() {
    //     apple.textContent = "Apple";
    // } );

    // apple.addEventListener("click" , () => {
    //     alert("Apple Clicked !!!");
    // } );

    console.log(fruits);

    fruits.forEach( (element) => {

        let text = element.textContent;

        element.addEventListener("mouseover" , function() {
            element.textContent = `Do you like ${text} ???`;
        } );

        element.addEventListener("mouseout" , () => {
            element.textContent = text;
        } );

        element.addEventListener("click" , function() {
            alert(`${text} clicked !!!`);
        } );
    } )

} );