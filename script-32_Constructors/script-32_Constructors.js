class Employee
{
    constructor()
    {
        console.log("I am an employee !!!");
    }
    login()
    {
        console.log("Employee has logged in !!!");
    }

    logout()
    {
        console.log("Employee has logged out !!!");
    }

    requestLeaves(days)
    {
        console.log(`Employee has requested ${days} leaves !!!`);
    }
};

class Programmer extends Employee
{

    // If there is no constructor in the child class,  the following constructor is created automatically.
    // constructor(...args)
    // {
    //     super(...args);
    // }

    constructor(name , role)
    {
        super();
        this.name = name;
        this.role = role;
    }

    role()
    {
        console.log(`The role of the programmer is ${this.role} !!!`);
    }

    requestCoffee(numOfCoffee)
    {
        console.lognumOfCoffee(`Programmer has requested ${numOfCoffee} coffees !!!`);
    }

    requestLeaves(days)
    {
        super.requestLeaves(days);
        console.log(`One extra than what was requested is granted !!!`);
    }
};

let p1 = new Programmer("Oliver Queen" , "SDE-I");

p1.requestLeaves(5);