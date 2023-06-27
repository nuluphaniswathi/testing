/*
let students=[
    {
        name:“ravi”,
        age:20
    },
    {
        name:“bhanu”,
        age:30
    },
    {
        name:“kiran”,
        age:26
    },{
        name:“madhu”,
        age:37
    },{
        name:“vikas”,
        age:30
    }
]
a.Get students whose age between 20 & 30
b. Find student with name “Aakash”
*/ 
let students=[
    {
        name:"ravi",
        age:20
    },
    {
        name:"bhanu",
        age:30
    },
    {
        name:"kiran",
        age:26
    },{
        name:"madhu",
        age:27
    },{
        name:"vikas",
        age:30
    }
]
let result1=students.filter(element => (element.age>20 && element.age<30))
console.log(result1);
for(let element of result1)
{
console.log(element.age);
}
let searchElement=students.find(students=>students.name=="bhanu")
if(searchElement==undefined)
{
    console.log("Employee not found");
}
else
{
console.log(searchElement.name);
}


