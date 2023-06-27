//write a function to receive two numbers as input and prime numbers between them
let a=prompt("enter first number:");
let b=prompt("enter second number:");
console.log("primenumbers between",a,"and",b);
let FindPrime1=function FindPrime(a,b)
{
    
    for(let i=a;i<=b;i++)
    {
        let counter=0;
        for(let j=1;j<=i;j++)
        {
        if(i%j==0)
        {
            counter++;
        }
        }
        if(counter==2)
        {
            console.log(i);
        }
       
    }
}
FindPrime1(a,b);
