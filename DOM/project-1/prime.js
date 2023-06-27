let input=document.querySelector(".first");
let btn=document.querySelector(".btn");
let result=document.querySelector(".result");

btn.addEventListener("click",()=>{
    result.innerHTML="";
    let n=Number(input.value); 
    //document.body.append(Factors);
    let c=0;
    for(let i=1;i<=
        n;i++)
    {
        
        if(n%i==0)
        {  

            c++;
            
        }

    }
    if(c==2)
    {
        result.innerHTML+=`<p>Prime</p>`;
    }
    else{
        result.innerHTML+=`<p>not prime</p>`;
    }

    
});







