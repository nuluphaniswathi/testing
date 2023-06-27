//generators=>uniquely generate values//no constructor for generator
//generator function==>generates the generator object

//create gernerator object
//place * mark after function 
//yield means giving very similar to return difference it wont comeout from the function
//bydefault every function returns undefined //log method returns nothing undefined
function* test()
{
    yield 1;
    yield 2;
    yield 3;
/*
    let v=1;
    while(true){
        yield v;
        v++;
    }//infinite values generator generates
 */   


}
//create generator object
let getObj=test();
//we can create any no of objects uniquely using generator
let getObj1=test();
//next()=>will yield the particular value at particular moment==return obj contains value and done
console.log(getObj);
console.log(getObj.next());//{value:1,done:false}
console.log(getObj.next());//{value:2,done:flase}
console.log(getObj.return(200));//stop the control wherever we need using return stmt
console.log(getObj.next());//{value:3,done:false}
console.log(getObj.next());//{value:undefined,done:true}
//stop the control wherever we need using return stmt
console.log(getObj1);
console.log(getObj1.next());//{value:1,done:false}
console.log(getObj1.next());//{value:2,done:flase}
console.log(getObj1.return(200))












/*const productsArray = [
    {
      name: "Shirt",
      variants: [
        { color: "red", size: "S" },
        { color: "blue", size: "M"},
      ],
    },
    {
      name: "Pants",
      variants: [
        { color: "green", size: "L" },
        { color: "black", size: "XL" },
      ],
    },
    {
      name: "Dress",
      variants: [
        { color: "pink", size: "S" },
        { color: "purple", size: "M" },
      ],
    },
  ];
  console.log(productsArray.map(element=>element.variants));
  //gives all the objects of variants in array like [[array(2)],[array(2)],[array(2)]]
  console.log(productsArray.flatMap(element=>element.variants));
  //all the objects in array in single tur\
  */


/*
let set=new Set();
let obj={"b":10};
set.add("a");
set.add(obj);
console.log("before referencing to null");
for(let v of set)
{
    console.log(v);
}
obj=null;
console.log("after referencing to null");
for(let v of set)
{
    console.log(v);
}

*/
/*

let map=new Map();
console.log("map:",map);
map.set("a",10);
map.set("b",20);
map.set({"c":20},"hi");
let obj={d:40};
//map.add(obj);
map.set(obj,"hello");
console.log("map after adding ele",map);
console.log("value of weakmap",map.get(obj));
for(let m of map)
{
    console.log("without obj null map  before",m);
}
obj=null;
for(let m of map)
{
    console.log("without obj null map  before",m);
}

let wmap=new WeakMap();
wmap.set(obj,"hi");*/