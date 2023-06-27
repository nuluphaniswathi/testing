let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");

function heavytask()
{
    console.log("heavy task started");//unblocking
    /*
    for(let i=0;i<100000000000000;i++)
    {

    }*/
    //takes time then blocking 
    //we should deal with blocking operation asynchronously to improve performance
    //asynchrouns return nothing
    setTimeout(()=>{
        console.log("timeout function");
    },10000)

    console.log("heavytask");
    console.log("hi heloo");
}
btn1.addEventListener("click",heavytask);