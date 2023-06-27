
// Consider the string “Good morning to all of you”. Find number of words and no of chars in each word of this string
// Consider the string “aaabbabababababababbaaaa”. Find frequency of “a” and “b”
/*
let str="good morning to all of you"
let result1=str.split(" ");
console.log(result1);
console.log(result1.length);
//no of chars
for(let element of result1)
{
    let result2=element.split("");
    console.log(element,"=>",result2.length);

}
*/
// Consider the string “aaabbabababababababbaaaa”. Find frequency of “a” and “b”

let input="aaabbabababababababbaaaa"
console.log((input.split("")).filter((element)=>element=='a').length);
console.log((input.split("")).filter((element)=>element=='b').length);
/*
let acount=0;
let bcount=0;
for(let i=0;i<input.length;i++)
{
    if(input[i]=='a')
    {
        acount++;
    }
    else
    {
        bcount++;
    }
}
console.log(`count of a is ${acount} and count of b is ${bcount}`);*/
//Write a function to receive a string and  to returns the reversed string
let input1="goodmorning"
let output=""
for(let i=input1.length-1;i>=0;i--)
{
    output+=input1[i];
}
console.log(input1);
console.log(output);
output1=""
for(let i=input1.length-1;i>=0;i--)
{
    output1+=input1.charAt(i);
    console.log()
}
//console.log(input1);
console.log(output1);

//let result2=str.split("");
//console.log(result2);
//console.log(result2.length);



/*
let s1="good evening hi and hi";//['h','e','l','l','o']
console.log(s1.length);
console.log(s1.slice(1,3))//(3,1)==>empty string
console.log(s1.substring(3,1))//==>swapped internally
console.log(s1.substr(2,3))//deprecated avoid it 
console.log(s1.replace("good","bad"))//if not match nothing happened
console.log(s1.replaceAll("hi","hello"));*/



