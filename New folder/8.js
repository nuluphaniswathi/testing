//complex object
let student={
    sno:10,
    name:"swathi",
    age:20,
    marks:[10,20,30,40],
    getAggregate:function(){
        let sum=0;
        for(let ele of this.marks)
        {

            sum=sum+ele
        }
        return (sum/this.marks.length)
    }
}
console.log(student.getAggregate(),'%');

/*
let employee={
    username:"swathi",
    age:20,
    basic:10000,
    skills:["js","react","python"],
    address:{
        city:"hyd",
        pin:533220,

    }
    getSalary:function(){
        let hra=0.15*this.basic
        let da=0.10*this.basic
    }

}*/