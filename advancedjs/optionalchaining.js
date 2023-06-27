//optional chaining using terinary operator and logical and
let person={
    email:"revi@gmail.com",
    address:{
        street:"sdj",
        city:"djghd"
    }
}
//?:
console.log(person.address.city.pincode?person.address.city.pincode.length:"pincode not fund")//by using this you can give
//optional information to the user so that user can easily understands.

console.log(person.address.city.pincode && person.address.city.pincode.length)
//it checks the first stmt if it is not true then it won't execute.

//if you no need to provide  the information then it simply display the undefined or error message

