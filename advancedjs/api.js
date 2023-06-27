const getDataFromApi=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        let result=data.filter((data)=>data.company.name=="Romaguera-Crona" || data.company.name=="Romaguera-Jacobson");
        console.table(result)})
    .catch(err=>console.log("err is ",err))
}
getDataFromApi()



/*
const getDataFromApi=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        let result=data.filter((data)=>data.id>45 && data.id <50);
        console.log(result)})
    .catch(err=>console.log("err is ",err))
}
getDataFromApi()*/
