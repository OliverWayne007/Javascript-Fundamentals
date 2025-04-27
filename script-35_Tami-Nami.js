"use strict";

let n = 100;

function findSumTilln(n)
{
    let ans = 0;
    for(let i = 1 ; i <= n ; i++)
    {
        ans += i;
    }
    console.log(ans);
}

function fun1()
{
    n = 100;
    console.log(`${n}: Fun-1`);
    findSumTilln(n);
}

function fun2()
{
    n = 200;
    console.log(`${n}: Fun-2`);
    findSumTilln(n);
}

setTimeout(fun1 , 3005); // 5050 ---------------------(4)

console.log("Hello World !!!"); // -----------(1)

findSumTilln(400); // 80200 -------------------(2)

setTimeout(fun2 , 3000); // 20100 -----------------(3)