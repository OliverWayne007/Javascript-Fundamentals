let age = 18;
// age >= 18 ? console.log("You can drink wine !!!") : console.log("You can drink water !!!");
const drink = age >= 18 ? `Wine` : `Water`;
console.log(`You are eligible to drink: ` , drink);
if(age >= 18)
{
    console.log(`You are eligible to drink Wine !!!`);
}
else
{
    console.log(`You are eligible to drink Water !!!`);
}
console.log(`You are eligible to drink ${age >= 18 ? 'Wine' : 'Water'}`);