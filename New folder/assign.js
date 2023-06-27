/*let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2]
// console.log(arr1)
// console.log(arr2)
console.log(arr3)

let obj={
    eno:100,
    username:"ravi",
    skills:["Java","ReactJS"],
    address:{
        street:"miyapur",
        city:"hyderabad"
    }
}
const copyObj=Object.assign({},obj)
console.log(obj.address==copyObj.address)//shallow copy only created//true
//creating deep copy
const deepCopy=JSON.parse(JSON.stringify(obj))
console.log(deepCopy)
console.log(obj.address==deepCopy.address)//references different so false

*/


//arrays



let a=[10,20]
b=a
console.log(b==a)//true because reference same




let obj={
    a:10,
    b:20
}
let obj2={
    c:30
}
let copyObj=Object.assign({},obj)
console.log("obj",obj)
console.log("copy:",copyObj)
console.log(obj==copyObj)
//spread operator
let copyObj1={...obj}
console.log(copyObj==copyObj1)
console.log(copyObj1)
let copyObj2={...obj,...obj2}
console.log(copyObj2)
//

