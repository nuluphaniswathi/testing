const getData=async()=>{
    let response=await fetch("https://reqres.in/api/users?page=2")
    let message=await response.json()
    console.log(message);
    let divContainer=document.querySelector(".container");
    let second=document.querySelector(".second");

    second.innerHTML+=`<p>Page:${message.page}</p><p>Total:${message.total}</p><p>Per Page:${message.total_pages}</p>`
    let first=document.querySelector(".first");
    //let second=document.querySelector(".second");
        let element=message.data;
        console.log("element:",element);
        for(let data of element)
        {
            console.log("Data",data);
        first.innerHTML+=`<div class="grid"><img src=${data.avatar}></img><p>${data.first_name} ${data.last_name}<p><p>${data.email}</p><div>`
        }
    


}
getData();

/*
let divContainer=document.querySelector("tbody");
//divContainer.innerHTML=divContainer.innerHTML+''

const getData=async()=>{
   let response =await fetch("https://jsonplaceholder.typicode.com/posts")
    let message=await response.json()
    console.log(message);
    for(let element of message)
    {
        divContainer.innerHTML=divContainer.innerHTML+`<tr><td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td>
        </tr>`


    }
    //divContainer.innerHTML=divContainer.innerHTML+''

    

}
getData();*/
