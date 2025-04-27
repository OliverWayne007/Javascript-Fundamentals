console.log('\n');

class Person
{
    constructor()
    {
        this.species = "homo sapiens";
    }

    Eat()
    {
        console.log("Eat Motherfucker !!!");
    }

    Sleep()
    {
        console.log("Just go to sleep already you little prick !!!");
    }

    work()
    {
        console.log("Do Nothing !!!");
    }
};

class Engineer extends Person
{
    work()
    {
        console.log("Solve Real World Problems by building something !!!");
    }
};

let p1 = new Person();

let e1 = new Engineer();

console.log(p1);

console.log('\n');

console.log(e1);

console.log('\n');

console.log(p1.work());

console.log('\n');

console.log(e1.work());

console.log('\n');