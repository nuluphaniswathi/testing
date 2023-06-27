//let arr=[10,20,30,40]
/*
for(let ele of arr)
{
    if(ele%2){
        console.log(ele,"is even")
    }
    else{
        console.log(ele,"is odd")
    }
}
//sum of elements in numbers arry
let sum=0
for(let element of arr){
    sum+=element
}
console.log(sum)*/


let arr=[10,20,30,40]
console.log(arr)
//insert at beginning
arr.unshift(1,2,3)
console.log(arr)
//insert at end
arr.push(100,200)
console.log(arr)
//index based insertion
arr.splice(1,0,123,234,456)
console.log(arr)
//remove ele using splice
arr.splice(0,2)
console.log(arr)
arr.splice(0,1)
console.log(arr)
//shift ==>delete the element at beginning doesnot take any parameter
console.log(arr.shift())

console.log(arr.shift())
console.log(arr)
//update an element
update=arr.splice(2,1,500)






/*

//person obj
let person={
    username:"swathi",
    age:20,
    cityOfPerson:'hyderabad'
};
console.log(person)
//can access data using . or by using key
console.log(person.username)
//console.log(person.mobile)undefined
console.log(person["username"])
//for in loop to travese the object
//add new property
person.mobile=6304000523;
console.log(person)
//modify property
person.username="phani swathi"

//delete a property
delete person.cityOfPerson;
//it cant delete the reference only it deletes the properties of object

//iterate object for in loop
for(let key in person)
{
    console.log(person[key])
}



//console.log("datatype of person is",typeof person)

//write a function to receive a number as check whether prime or not return the result

//function called firstclasscitizens
/*
function FindPrime(n)
{
    let counter=0;
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            counter++;
        }
    }
    if(counter==2)
    {
        return "prime";
    }
    else{
        return "not prime"
    }

}
let num=11;
let res=FindPrime(num);
console.log(res);
//function expression-anonymous function
let FindPrime1=function FindPrime(n)
{
    let counter=0;
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            counter++;
        }
    }
    if(counter==2)
    {
        return "prime";
    }
    else{
        return "not prime"
    }

}
let num1=11;
let res1=FindPrime(num);
console.log(res1);
console.log(FindPrime1());
//arrowfunction==>body having oneline
let findSum1=(first,second)=>first+second;
console.log(findSum1(20,30));

//write a function to receive two numbers as input and prime numbers between them
let a=prompt("enter first number:");
                          
*/
/*
console.log("a is",a)
const a=100;*/
/*
//arrays
let arr=[10,20,30,40]
for(let index=0;index<arr.length;index++){
    console.log(arr[index])
}
//for of
for(let ele of arr)
{
    console.log(ele)
}
//let name=['ravi','swathi']
//console.log(arr[3])//undefined
*/