const getDataFromApi=async()=>{
    try{
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    //if we remove the await before fetch it returns the promise that is in pending state it 
   // didnot wait instead it goes to second statement if we keep await before fetch
   //it will wait until the promise is received.
    console.log(typeof response);//object
    let data=await response.json()
    //by removing the wait before response it returns another promise that is in pending state
    // to get the desired result you have to wait until it completes then proceed
    console.log(data);
    let result1=data.filter((data)=>data.company.name=="Romaguera-Crona" || data.company.name=="Romaguera-Jacobson");
    console.table(result1)
    }
    catch(err)
    {console.log("err is ",err);}
}
getDataFromApi()

//
/*
const getDataFromApi1=async()=>{
    try{
    let result1=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data1=await result1.json()
    
    console.log(data1);
    let result2=data1.filter((data1)=>data1.id>45 && data1.id <50);
    console.table(result2)
    }
    catch(err)
    {console.log("err is ",err);}
}
getDataFromApi1()
*/
