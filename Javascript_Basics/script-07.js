// Using strict mode
"use strict";

function cutFruitPieces(fruit)
{
    return 4 * fruit;
}


// Calling a function from another function
function fruitProcessor(apples , oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces !!!`;
}

console.log(fruitProcessor(2 , 3));