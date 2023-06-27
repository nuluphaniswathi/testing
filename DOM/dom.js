//accessing eleemnts from the dom
//document is the object
let headingElement=document.querySelector(".heading");
//add event to heading element
headingElement.addEventListener('click',()=>{
    headingElement.style.color="pink";
    headingElement.textContent="Welcome to DOM";
    headingElement.style.backgroundColor="black";
    headingElement.style.fontSize="5rem";
    headingElement.style.textTransform="lowercase";
})

