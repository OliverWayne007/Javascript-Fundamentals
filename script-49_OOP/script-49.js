// Objects : Entities that have some properties/fields and methods/behaviours

const student1 = {
    fullname: "Matt Murdock" , 
    marks: 94.4 , 
    printMarks: function()
    {
        console.log("marks: " , this.marks);
    }
}

const student2 = {
    fullname: "Frank Castle" , 
    marks: 91.8 , 
    printMarks: () => {
        console.log("marks: " , this.marks);
    }
}

console.log(student1.printMarks());

console.log(student2.printMarks());


// Prototypes in Objects

// Prototype is a special property of javascript objects. They are basically reference to other objects

// Following is an example of Prototypal Inheritance: Employee ---> SDE ---> KaranArjun

// Employee

const employee = {
    calcTax: function()
    {
        console.log("The tax rate for a normal employee is: 10%");
    }
}

employee.calcTax();


// SDE

const sde = {
    salary: 50000 , 
    leaves: 20
}

sde.__proto__ = employee;

console.log("sde.salary: " , sde.salary);

console.log("sde.leaves: " , sde.leaves);

sde.calcTax();


// KaranArjun

const karanArjun = {
    salary: 100000 , 
    calcTax: function()
    {
        console.log("The tax rate for karanArjun is: 20%");
    }
}

karanArjun.__proto__ = sde;

console.log("karanArjun.salary: " , karanArjun.salary);

console.log("karanArjun.leaves: " , karanArjun.leaves);

karanArjun.calcTax();

// If both object and the prototype have the same method, object's method is used.


// Using Classes to create Objects

// -----------------------------------------------------------------------------------------------------------------------------

// If Parent and Child have the same method, Child's method will be used. [ Method Overriding ]

class Parent
{
    hello()
    {
        console.log("Hello from Parent....");
    }
}

class Child extends Parent
{
    hello()
    {
        console.log("Hello from Child....");
    }
}

let child = new Child();

child.hello();


// ---------------------------------------------------------------------------------------------------------------------------


class Person
{
    eat()
    {
        console.log("eating.....");
    }

    drink()
    {
        console.log("drinking water.....");
    }

    sleep()
    {
        console.log("sleeping....");
    }
}

class Engineer extends Person
{
    drink()
    {
        console.log("drinking tea....");
    }

    work()
    {
        super.drink();
        this.eat();
        this.drink();
        console.log("Engineer is Solving problems and building stuff.....");
        this.sleep();
    }
}

class SoftwareEngineer extends Engineer
{
    drink()
    {
        console.log("drinking coffee.....");
    }

    work()
    {
        // super.super.drink();
        super.drink();
        this.eat();
        console.log("Software Engineer is solving problems by building softwares......");
        this.drink();
        this.sleep();
    }
}

class Doctor extends Person
{
    drink()
    {
        console.log("drinking lemon juice....");
    }

    work()
    {
        super.drink();
        this.drink();
        this.eat();
        console.log("Treating patients.....");
        this.sleep();
    }
}


let person = new Person();

person.eat();

person.sleep();


console.log("\n");


let engineer = new Engineer();

// engineer.eat();

// engineer.sleep();

engineer.work();


console.log("\n");


let software_engineer = new SoftwareEngineer();

software_engineer.work();

console.log("\n");


let doctor = new Doctor();

// doctor.eat();

// doctor.sleep();

doctor.work();