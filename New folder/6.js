//Take a number array[9,10,45,78,34,15] add value 5 for elements lesst 10,7 for 
//elements between 21 and 30 and 10 for the above 30
let array=[9,10,45,78,34,15]
let res=[]
for(let element of array)
{
    if(element<10)
    {
        element=element+5
        res.push(element)
    }
    else if(element>21 && element <30)
    {
        res.push(element+7)
    }
    else{
        res.push(element+10)
    }
}
console.log(res)

/*

let result=[]
let arr=[10,20,30,6,-12,45]
for(let element of arr)
{
    if(element<30)
    {
        result.push(element)
    }
}
console.log(result)
//get elements less than 30
let result1=arr.filter(element=>element<30)
console.log(result1)
let result2=arr.map(element=>element+10)
console.log(result2)*/