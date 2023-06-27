/*
let a=10;
let b=20;
console.log("a is",a," b is",b)
//template string or template string literal
console.log(`a is ${a} and b is ${b}`)*/
let arr=[10,20,30]
//unpack the data
let  [a,b,c]=[...arr];
console.log(a,b,c);
let  [,d,]=[...arr];//you want only second element then syntax
console.log(d);

let obj={
    username:"swathi",
    age:20,
    
    address:{
        street:"miyapur",
        city:"hyderabad"
    }
}
//unpack==>destructuring the object
// you should supply particular keys of an abject to unpack
let {username,age,address}={...obj}
console.log(username,age,address)
console.log(address.city)