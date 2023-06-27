//reduce


let arr=[9,10,45,78,34,15]
let result=arr.reduce((element,accumulator)=>element+accumulator)
console.log(result)
let min=arr.reduce((element,acc)=>element<acc?element:acc)
console.log(min)
let max=arr.reduce((element,acc)=>element>acc?element:acc)
console.log(max)
/*
arr.forEach((element,index)=>{
    console.log(index," ",element);
})
let searchElementIndex=arr.findIndex(element=>element==45)
console.log(searchElementIndex);
let searchElement=arr.find(element=>element==45)
console.log(searchElement);*/
