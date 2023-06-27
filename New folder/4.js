//prime number of an array
arr=[10,20,5,2]
primearr=[]
for(let i=0;i<arr.length;i++)
{
    let counter=0
    for(let j=1;j<=arr[i];j++)
    {
        if(arr[i]%j==0)
        {
            counter++;
        }
    }
    if(counter==2)
    {
        
        arr.push()
        //console.log(arr[i],"is prime");
    }
    else{
        console.log(arr[i],"is not prime");
    }
}