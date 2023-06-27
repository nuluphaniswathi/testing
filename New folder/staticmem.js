//objects are mutable
let obj={
    a:10,
    b:20
}
//create copy of obj
let copyObj=obj;
console.log(obj)
console.log(copyObj)
obj.x=30;
console.log(obj)
console.log(copyObj)
//non primitive are mutable
let obj1={
    a:10,
    b:20
}
let obj3=obj1
console.log(obj3==obj1)

















//primitives are imutable-->create a new location instead of existing location//everytime you are creating it creates new space
// let a =10;
// let b=10;
// //create a copy



// let c=a;
// console.log("c is ",c)
// console.log("a before change",a)
// a=a+10
// console.log("c is ",c)
// console.log("a after change",a)

// let data=10;
// console.log(data);
// data+10;//data modified but created in new space
// console.log(data);
// data=data+10;
// console.log(data);
//non-primitives are mutable





/*

//static member of a class
class Test{
    //instance variables==part of object
    x=10;
    // static variables==>generic data related to class==>ex:compare objects
    static a=100;
    // static methods
    // instance methods==process the instance data of the object
    test1()
    {
        console.log("test1");
    }
}
class Test2 extends Test{
   
}
let obj1=new Test();
let obj2=new Test2();
console.log(Test2.a);//parent static variable accessible through child also by using classname inherited the static variables also
console.log(obj1.test1())//called on the object==>*/
