let ref1=setInterval(()=>{
 console.log("for every 2 sec setinterval executes");
},2000)

let ref2=setInterval(()=>{
    console.log("for every 4 sec setinterval executes");
},4000)

function firststopInterval()
{
    clearInterval(ref1);
}
function secondstopInterval()
{
    clearInterval(ref2);
}






document.querySelector(".btn1").addEventListener('click',firststopInterval)
document.querySelector(".btn2").addEventListener('click',secondstopInterval)
