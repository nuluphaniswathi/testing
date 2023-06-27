//abnormal termination because of error
//try==>wrote suspected code
//catch==>catch the error which was occured at try and handle
//finally==>error occured or not or handled or not any situation finally executes//to perform some cleanup operations
//custom error message using new error()
//display only error message if you want only error message description
try{
    //let a;
    /*
    if(a==undefined){
        throw new Error("a is not defined");//custom error
    }*/
    console.log(a)
}
catch(err)
{
    //console.log("err",err.message);
    //console.error("err",err)
}

finally{
    console.log("finnalley");
}
let x=10;

console.log(x);
let hi="hi";
console.log(hi);


