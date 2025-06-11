async function A()
{
    const data = await B();
    console.log("Data: " , data);
}

async function B()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    return data;
}

A();