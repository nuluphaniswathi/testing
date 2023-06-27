//emp constructor
function Employee(empId,name,age,basic){
    ////object initialization logic
    this.empId=empId;
    this.name=name;
    this.age=age;
    this.basic=basic;
}
//add methods to prototype of employee for constructor
Employee.prototype.getsalary=function(){
    let hra=0.15*this.basic;
    let da=0.10*this.basic;
    console.log(this.basic+hra+da);

}
let emp2=new Employee(100,"ravi",20,10000);
let emp1=new Employee(200,"swathi",20,20000);
console.log(emp2);
console.log(emp1);
class Emp{
    constructor(empId,name,age,basic){
        ////object initialization logic
        this.empId=empId;
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
    getsalary(){
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        console.log(this.basic+hra+da);
    
    }

}
class Manager extends Emp{

}
let Manager=new Manager()
console.log(Manager);