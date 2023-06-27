let input1=document.querySelector(".first");
let input2=document.querySelector(".second");
let addbtn=document.querySelector(".add");
let subbtn=document.querySelector(".subtract");
let multiplybtn=document.querySelector(".multiply");
let dividebtn=document.querySelector(".divide");
let container=document.querySelector(".container");

   

/*
const add=()=>{
    let data1=(+input1.value);
    let data2=(+input2.value);
    console.log(data1);
    console.log(data2);
    let result=data1+data2;
    let h3=document.createElement("h3");
    h3.textContent=result;
    container.append(h3);
    //container.innerHTML+=`<h3>Result=${result}</h3>`;
}*/
addbtn.addEventListener('click',()=>{
    container.innerHTML="";
    let data1=(+input1.value);
    let data2=(+input2.value);
    console.log(data1);
    console.log(data2);
    let result=data1+data2;
    let h3=document.createElement("h3");
    h3.textContent=result;
    container.append(h3);

});
subbtn.addEventListener('click',()=>{
    container.innerHTML="";
    let data1=(+input1.value);
    let data2=(+input2.value);
    console.log(data1);
    console.log(data2);
    let result=data1-data2;
    let h3=document.createElement("h3");
    h3.textContent=result;
    container.append(h3);

});
multiplybtn.addEventListener('click',()=>{
    container.innerHTML="";
    let data1=(+input1.value);
    let data2=(+input2.value);
    console.log(data1);
    console.log(data2);
    let result=data1*data2;
    let h3=document.createElement("h3");
    h3.textContent=result;
    container.append(h3);

});
dividebtn.addEventListener('click',()=>{
    container.innerHTML="";
    let data1=(+input1.value);
    let data2=(+input2.value);
    console.log(data1);
    console.log(data2);
    let result=data1/data2;
    let h3=document.createElement("h3");
    h3.textContent=result;
    container.append(h3);

});

