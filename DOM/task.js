let btn=document.querySelector(".btn");
let para1=document.querySelector(".para1");
let para2=document.querySelector(".para2");
let heading=document.querySelector("h1");
let container=document.querySelector(".container");

btn.addEventListener('click',()=>{
    btn.style.backgroundColor="#ffc9c9"
    para1.style.backgroundColor="#dbe4ff" 
    para2.style.backgroundColor="#dbe4ff"
    container.style.backgroundColor="#a5d8ff"
    para1.style.fontSize="2em" 
    para2.style.fontSize="2em" 
    heading.style.color="#868e96"
    para1.style.boxShadow="20px 10px 10px #495057" 
    para2.style.boxShadow="20px 10px 10px #495057" 



    
})