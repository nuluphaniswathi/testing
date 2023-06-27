//to print even factors of a given number


function EvenFactorsOfNum(num)
{
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            if(i%2==0)
            {
                console.log("Even factor of ",num,"is",i);
            }
        }
    }
}
let num=prompt("enter a number:");
EvenFactorsOfNum(num);
