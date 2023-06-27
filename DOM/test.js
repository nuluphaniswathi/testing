
let users=[
    {
        username:"ravi",
        email:"ravi@mail.com",
        age:21
    },
    {
        username:"suresh",
        email:"suresh@mail.com",
        age:32
    },
    {
        username:"bhanu",
        email:"bhanu@mail.com",
        age:28
    },
    {
        username:"vikas",
        email:"vikas@mail.com",
        age:40
    }
]
let tbody=document.querySelector("tbody");

for(let user of users)
{
    //create tr
    let tr=document.createElement("tr");
    //create 3 tds for each tr
    for(let key in user)
    {
        let td=document.createElement("td");
        td.textContent=user[key];
        //create button for each row
       
        tr.append(td);
    
    }
    let RowButton=document.createElement("button");
    RowButton.textContent="DELETE";
    tr.append(RowButton);
    tbody.append(tr);
    RowButton.addEventListener("click",()=>{
        //remove the element from the row
        tr.remove();

    })
    // tr.append(RowButton);
    // tbody.append(tr);

}












/*
let divContainer=document.querySelector(".container");

let paraBtn=document.querySelector(".btn");
//innerhtml is used to create children for the particular elements without writing complex logic

let heading="woooo"
divContainer.innerHTML=`<div>
<p>${heading}</p>
<p>Hi this is dom</p>
<h2>HII</h2>
</div>`
/*
let arr=[10,20,30]
let unorderedList=document.querySelector("ul");
for(let element of arr)
{
    let list=document.createElement("li");
    list.textContent=element;
    console.log(list);
    unorderedList.append(list);
}
*/


    /*
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
td1.textContent=element.username;
td2.textContent=element.email;
td3.textContent=element.age;
tr.append(td1);
tr.append(td2);
tr.append(td3);
tbody.append(tr);*/










//array
// let array=[10,20,30,40];
// //create h2 element
// //
// for(let element of array)
// {
//     let head2=document.createElement("h2");
//     head2.textContent=element;
//     divContainer.append(head2);
// }

// paraBtn.addEventListener("click",CreatePara);
// //creating para 
/*
const CreatePara=()=>
{
let para=document.createElement("p");
para.textContent="Hi this is paragraph";
console.log(para);
divContainer.append(para);
}*/
//array
// let array=[10,20,30,40]
// paraBtn.addEventListener("click",CreatePara);
