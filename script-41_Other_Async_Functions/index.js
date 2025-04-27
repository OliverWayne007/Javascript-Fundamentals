console.log('\n');

const fs = require("fs");

// console.log(fs);

console.log(process.cwd());

console.log('\n');

fs.readFile("a.txt" , "utf8" , (err , data) => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
    console.log('\n');
} );

console.log("Hey there !!!\n");

let a = 0;

for(let i = 1 ; i <= 1e10 ; i++)
{
    a++;
}

console.log("The value of a is: " , a);

console.log('\n');