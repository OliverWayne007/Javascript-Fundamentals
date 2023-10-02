// Using strict mode
// "use strict";

console.log('\n');

// NOTE: WHEN WE ACCESS ANY FUNCTION WITHOUT THE PARENTHESIS(BRACKETS) , WE ARE BASICALLY ACCESSING THE DEFINITION OF THE 
// FUNCTION AND NOT THE OUTPUT/RESULT OF THE FUNCTION. BUT WHEN WE ACCESS ANY FUNCTION WITH THE PARENTHESIS ,  WE ARE ACTUALLY 
// ACCESSING THE OUTPUT/RESULT PRODUCED BY THE FUNCTION AND NOT THE DEFINITION OF THE FUNCTION.

function motto()
{
    console.log(this);
    console.log('\n');
    console.log("You have failed this city !!!");
}

motto();

console.log('\n');

let Arrow = {
    Alias: "Emrald Archer" , 
    Name: "Oliver Queen" , 
    Profession: "Vigilante" , 
    Skill: "Archery" , 
    City: "Starling City" , 
    Friends: ["Felicity Smoak" , "Laurel Lance" , "John Diggle" , "Roy Harper" , "Sara Lance"] , 
    GirlFriend: "Felicity Smoak" , 
    Sisters: ["Thea Queen" , "Emiko Adachi"] , 
    Brother: "Tommy Merlyn"
};

Arrow.Motto = motto;

console.log("Arrow description: " , Arrow);

console.log('\n');

Arrow.Description = function()
{
    console.log(this);
    console.log('\n');
    console.log(`My name is ${this.Name} and Iam the Green Arrow !!!`);
}

console.log("Arrow description: " , Arrow);

console.log('\n');

console.log(Arrow.Motto);

console.log('\n');

Arrow.Motto();

console.log('\n');

Arrow.Description();

console.log('\n');

// Arrow.Description;

console.log(Arrow.Description);