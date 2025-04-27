"use strict";

console.log('\n');

const student = {
    Name : "Arpit Singh" , 
    RollNumber : "20115016" , 
    ContactNumber : "9109840806" ,
    Branch : "Computer Science and Engineering" , 
    getDetails1 : function()
    {
        console.log(`Name : ${this.Name}\nRollNumber: ${this.RollNumber}\nContactNumber : ${this.ContactNumber}\nBranch : ${this.Branch}\n`);
    } , 
    getDetails2 : () => {
        console.log(`Name : ${this.Name}\nRollNumber: ${this.RollNumber}\nContactNumber : ${this.ContactNumber}\nBranch : ${this.Branch}\n`);
    } , 
    getDetails3()
    {
        console.log(`Name : ${this.Name}\nRollNumber: ${this.RollNumber}\nContactNumber : ${this.ContactNumber}\nBranch : ${this.Branch}\n`);
    }
};

console.log(student);

console.log('\n');

console.log(student.getDetails1());

console.log('\n');

console.log(student.toString);

console.log('\n');

const Employee = {
    calcTax()
    {
        console.log("The tax rate is 10%");
    }
};

const KaranArjun = {
    Salary : 50000
}

KaranArjun.__proto__ = Employee;

const KaranArjun1 = {
    Salary : 100000 , 
    calcTax()
    {
        console.log("The tax Rate is 20%");
    }
};

KaranArjun1.__proto__ = Employee;

// Classes and Objects

class Car
{
    // constructor()
    // {
    //     console.log("Creating new object !!!");
    // }

    constructor(price)
    {
        console.log("This is a parameterized constructor !!!");
        this.price = price;
    }

    Start()
    {
        console.log("Start the Goddamn Car !!!");
    }

    Stop()
    {
        console.log("Stop the Goddamn Car !!!");
    }

    setBrand(brand)
    {
        this.brand = brand;
    }

    getBrand()
    {
        console.log(`The brand name is ${this.brand} !!!`);
    }
};

class SportsCar extends Car
{
    constructor()
    {
        super(1000000); // To invoke Parent class constructor
        this.highPerformanceEngine = true;
        this.highPerformanceTires = true;
        this.advancedBrakingSystem = true;
        this.aerodynamicDesign = true;
        this.advanceSuspensionSystem = true;
    }

    setMaxSpeed(maxSpeed)
    {
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed()
    {
        console.log(`The max speed of the sports car is: ${this.maxSpeed}`);
    }
}

let car1 = new Car(); // Constructor is invoked 

let car2 = new Car(); // Constructor is invoked

console.log('\n');

car1.getBrand();

car1.setBrand("Mercedes Benz");

car1.getBrand();

car1.Start();

car1.Stop();

console.log('\n');

car2.getBrand();

car2.setBrand("Audi");

car2.getBrand();

car2.Start();

car2.Stop();

console.log('\n');

let ferrariRoma = new SportsCar(); // In javascript, a class can have only one constructor

console.log(ferrariRoma);

console.log('\n');