let arr=[10,20,30,40]
let maxNum=arr[0];
let minNum=arr[0];
for(let element of arr)
{
    if(element>maxNum)
    {
        maxNum=element;
    }
    else if(element<minNum)
    {
        minNum=element;
    }
}
console.log(maxNum);
console.log(minNum);