class RailwayForm
{
    constructor(name , age , email , phone , city , state , source , destination , trainNumber , berth)
    {
        this.country = "India";
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.state = state;
        this.source = source;
        this.destination = destination;
        this.trainNumber = trainNumber;
        this.berth = berth;
    }

    reviewDetails()
    {
        alert(`name: ${this.name}\n
               age: ${this.age}\n
               email: ${this.email}\n
               phone: ${this.phone}\n
               city: ${this.city}\n
               state: ${this.state}\n
               source: ${this.source}\n
               destination: ${this.destination}\n
               trainNumber: ${this.trainNumber}\n
               berth: ${this.berth}\n`
               );
    }

    submit()
    {
        alert(`${this.name}: Your form has been submitted for train number: ${this.trainNumber} !!!`);
    }

    cancel()
    {
        alert(`${this.name}: Your form has been cancelled for train number: ${this.trainNumber} !!!`);
    }
};

let harryForm = new RailwayForm("Harry" , 22 , "abc@gmail.com" , "100" , "Bhilai" , "CG" , "Durg" , "Noida" , 12422 , "Side-Upper");

harryForm.reviewDetails();

harryForm.submit();

let rohanForm = new RailwayForm();