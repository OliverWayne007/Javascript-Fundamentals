// Using strict mode
"use strict";

console.log('\n');

const data = [
    { Name: "Oliver Queen" , Profession: "Vigilante" } , 
    { Name: "Bruce Wayne" , Profession: "Vigilante" }
];


// function getData()
// {
//     setTimeout( () => {
//         data.forEach( (element) => {
//             console.log("Name: " , element.Name , " Profession: " , element.Profession);
//         } );
//         console.log('\n');
//     } , 2000 );
// }

// function createData(newData)
// {
//     setTimeout( () => {
//         data.push(newData);
//     } , 4000 );
// }

// getData();

// createData({Name: "Matt Murdock" , Profession: "Vigilante"});


// Problem in the above synchronous code:
// The getData function is executed after 2sec because the code to print the data which is the forEach function is present inside the
// callback function which is recieved by the setTimeout function along with a timer of 2sec. On the other hand , 
// The createData function is executed after 4sec because the code to push the data into the data array is present inside the
// callback function which is recieved by the setTimeout function along with a timer of 4sec.
// Because of this, the getData function is executed before the createData function and hence, we recieve the outdated data and not
// the updated data.




// Resolving the above problem using Callbacks

// function getData()
// {
//     setTimeout( () => {
//         data.forEach( (element) => {
//             console.log("Name: " , element.Name , " Profession: " , element.Profession);
//         } );
//         console.log('\n');
//     } , 2000 );
// }

// function createData(newData , callback)
// {
//     setTimeout( () => {
//         data.push(newData);
//         callback();
//     } , 4000 );
// }

// createData({Name: "Matt Murdock" , Profession: "Vigilante"} , getData);




// Resolving the above problem using Promises

function getData()
{
    setTimeout( () => {
        data.forEach( (element) => {
            console.log("Name: " , element.Name , " Profession: " , element.Profession);
        } );
        console.log('\n');
    } , 2000 );
}

function createData(newData)
{
    const myPromise = new Promise( (resolve , reject) => {
        setTimeout( () => {
            data.push(newData);
            let error = false;
            if(!error)
            {
                resolve("Promise fulfilled !!!\n");
            }
            else
            {
                reject("Promise rejected !!!\n");
            }
        } , 4000 );
    } );

    return myPromise;
}

createData({Name: "Matt Murdock" , Profession: "Vigilante"})
.then( (response) => {
    console.log("The response is: " , response);
    getData();
} )
.catch( (response) => { 
    console.log("The response is: " , response);
} );