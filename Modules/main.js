//default export
// import emp from './module1.js';
// console.log(emp);
//named export
// import {emp} from './module1.js';
// console.log(emp);
//named export of array and object from module2
// import {array,obj} from './module2.js';
// console.log(array);
// console.log(obj);
//named export of function ,object,array from module3
// import {func,module3Obj,module3array} from './module3.js'
// console.log(module3Obj);
// console.log(func);
// console.log(module3array);
// import module3 from './module3.js'
// module3.display();
//default export
// import object1 from './module2.js'
// console.log(object1);
//closure in javascript
function testOut()
{
    let a=100;
    return function testIn()
    {
        let b=200;
        return function testInnerMost()
        {
            let c=400;
            //return a+300;
            return a+b+c;
        }
    }

}
let result=testOut();
let result1=result();
console.log(result1);
console.log(result1());
