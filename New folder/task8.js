/*
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
let emp1=new Emp(500,"swathi",20,10000);
emp1.getsalary()
let emp2=new Emp(501,"rani",21,20000);
emp2.getsalary()
let emp3=new Emp(502,"ravi",22,30000);
emp3.getsalary()
let emp4=new Emp(503,"sudher",23,40000);
emp4.getsalary()
let emp5=new Emp(504,"navya",24,50000);
emp5.getsalary()
*/


function Emp(empId,name,age,basic){
    ////object initialization logic
    this.empId=empId;
    this.name=name;
    this.age=age;
    this.basic=basic;
}
Emp.prototype.getsalary=function(){
    let hra=0.15*this.basic;
    let da=0.10*this.basic;
    console.log(this.basic+hra+da);

}
let emp1=new Emp(500,"swathi",20,10000);
emp1.getsalary()
let emp2=new Emp(501,"rani",21,20000);
emp2.getsalary()
let emp3=new Emp(502,"ravi",22,30000);
emp3.getsalary()
let emp4=new Emp(503,"sudher",23,40000);
emp4.getsalary()
let emp5=new Emp(504,"navya",24,50000);
emp5.getsalary()

