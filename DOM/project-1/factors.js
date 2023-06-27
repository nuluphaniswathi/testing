let input=document.querySelector(".factor");
let btn=document.querySelector(".btn");
let result=document.querySelector(".result");

btn.addEventListener("click",()=>{
    result.innerHTML="";
    let result1=Number(input.value); 
    //document.body.append(Factors);
    for(let i=1;i<=result1;i++)
    {
        if(result1%i==0)
        {  
            let p=document.createElement("p");
            p.textContent=i;
            result.append(p);
        }

    }

    
})

