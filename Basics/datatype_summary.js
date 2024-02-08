// Primitive -> Call by Value // Stack
/*
1.) String 
2.) Number
3.) Boolean
4.) null -> it means empty not 0
5.) undefined
6.) Symbol 
7.) BigInt
*/


let myName = "Akshat Parakh"
let anotherName = "WatchGuard Technologies !!"

anotherName = "WG!!"
console.log(myName);
console.log(anotherName);


// Non Primitive // Pass by reference // Heap
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "userTwo@gmail.com"


console.log(userOne)
