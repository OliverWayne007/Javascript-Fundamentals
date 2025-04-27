// Using strict mode
"use strict";

console.log('\n');

const Restaurant = {
    name : "Classico Italiano" , 
    location : "Via Angelo Tavanti 23 , Firenze , Italy" , 
    categories : ['Italian' , 'Pizzeria' , 'Vegetarian' , 'Organic'] , 
    starterMenu : ['Foccacia' , 'Bruschetta' , 'Garlic Bread' , 'Caprese Salad'] , 
    mainMenu : ['Pizza' , 'Pasta' , 'Risotto'] , 
    order : function(starterIndex , mainIndex)
    {
        return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
    }
};

const arr = [2 , 3 , 4 , 5 , 6];

// Destructuring the array arr
const [x , y , , z] = arr;

console.log(x , y , z , '\n');

// Destructuring the Restaurant.categories array
const [cat1 , cat2 , cat3 , cat4] = Restaurant.categories;

console.log(cat1 , ' ' , cat2 , ' ' , cat3 , ' ' , cat4 , '\n');

// Let the Primary mainMenu of the restaurant be Pizza and the Secondary mainMenu be Pasta
let [primary , secondary] = Restaurant.mainMenu;

console.log(primary , ' ' , secondary , '\n');

// Now, suppose the restaurant wants to switch its primary and secondary mainMenu.

// Switching using a temporary variable
let temp = primary;
primary = secondary;
secondary = temp;

console.log(primary , ' ' , secondary , '\n');

// Now, suppose the restaurant wants to re-switch its primary and secondary mainMenu and reset it back to the original mainMenu.

// Switching without using the temporary variable
[secondary , primary] = [primary , secondary];

console.log(primary , ' ' , secondary , '\n');

console.log('\n');

// Getting orders from the starterMenu and the mainMenu based on the order-id

const [starterCourse , mainCourse] = Restaurant.order(2 , 0);

console.log(starterCourse , " " , mainCourse);

console.log('\n');

// Destructuring a nested array
const nestedArray = [1 , 2 , 3 , [4 , 5] , 6 , [7 , 8]];

const [first ,  ,  , second ,  , [nestedFirst , nestedSecond]] = nestedArray;

console.log(first , " " , second , " " , nestedFirst , " " , nestedSecond);

console.log('\n');

// Setting default values at the time of destructuring which will be over-written by the actual value at that position, but if that 
// position/index is not present in the array, then the default value will stay as it is for that position.

// If default value is not explicitly provided then by default it is "undefined"
const [p , q , r] = [8 , 9];

console.log(p , " " , q , " " , r , '\n');

// Explicitly setting default values
const [i = 100 , j = 100 , k = 100] = [15 , 16]

console.log(i , " " , j , " " , k , '\n');
