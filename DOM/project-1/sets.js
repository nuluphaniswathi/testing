let set=new Set();
console.log(set);
set.add(10);
set.add(10);
set.add(20);
console.log(set);
console.log(set.size);
set.delete(10);
console.log(set);
set.clear();
console.log("After clear",set);//set 0 size 0
set.add(40);
set.add(60);
console.log(set.has(20));
console.log(set.has(90));
const o={a:10,b:20}
set.add(o);
const b={a:10,b:20}
set.add(b)//references are diff for object so added to set
console.log(set);
set.add({c:100});
console.log(set);
console.log("after adding c object",set);
console.log(set);
for(let v of set)
{
    //deleting non primitive object in set
    if(v.c==100)
    {
        set.delete(v);
    }
}
console.log("after deleting non primitive object",set);
for(const item of set)
{
    console.log(item);
}
for(const item of set.keys())
{
    console.log(item);
}
// console.log([...set]);
// console.log(new Set("Swathi"));




