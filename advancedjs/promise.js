let condition1=true;
let condition2=false;
//promise1
let meetAt6pm=new Promise(
    (resolved,rejected)=>{
        setTimeout(()=>{
            if(condition1==true)
            {
            resolved("Hi waiting for you ..just come out");
            }
            else{
                rejected("meet you some other time");
            }

        },5000);

});

//promise2

let buyPopcorn=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(condition2==true)
        {
        resolved("kindly have the popcorn");
        console.log("task completed");
        }
        else{
            rejected("...");
        }

    },7000);

});

meetAt6pm.
then((message)=>{buyPopcorn;
    /*
    if(message=="Hi waiting for you ..just come out")
    {
        console.log(message);
        return buyPopcorn;
    }
    else{
        console.log("why don't you come");
    }*/

})
.then((msg)=>{
    console.log("okay enjoy");
    /*
    if(msg=="kindly have the popcorn")
    {
        console.log("okay enjoy the movie with",msg);
    }
    else{
        console.log("sorry there is no popcorn");
    }*/
})
.catch((err)=>{
    console.log("message from catch",err);
})



















/*
let songrelease=true;
let promiseObj=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(songrelease==true)
        {
            resolved("The song is released on time audience");
        }
        else{
            rejected("The song is not released due to some issues");
        }
    },4000);
});
promiseObj.
then((message)=>{
    console.log("enjoy audience",message);
}).
catch((err)=>{
    console.log("stay tuned we can release soon",err);
})
*/



















/*
//create a promise "call you later"
let condition=false;
let promiseObj=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(condition==true)
        {
            resolved("Hi hello how are you frnd");
        }
        else{
            rejected("sorry frnd");
        }


    },5000);
});
//consume  a promise
console.log(promiseObj);
promiseObj.
then((message)=>{
    console.log("message from then",message);
}).
catch((err)=>{
    console.log("message from catch",err)
})*/