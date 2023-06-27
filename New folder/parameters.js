arr=[10,20,30]
let result=arr.reduce((element,accumulator)=>element+accumulator)
console.log(result)

//params

// function Test(a)
// {
//     console.log(a)//undefined
// }
// Test()
//default parameters
    // function Test(a=1)
    // {    console.log(a)//undefined
    // }
    // Test()
//rest parameter==can receive any no of arguments and pack them into an array
// function Test(...a)
//      {    console.log(a)
//     }
//     Test(10,20,30)
// //return sum using rest,rest parameter is always in last place as an argument because it receives all the arguments
// function SumofArr(...arr)
// {
//     console.log(arr.reduce((element,accumulator)=>element+accumulator))

// }
// SumofArr(10,20,30)
// //debug source filter method
