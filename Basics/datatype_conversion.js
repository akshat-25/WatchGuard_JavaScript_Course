let score = "33"
let scoreTwo = "123abc"  // => NaN (Not a number)
let a =  null
let b =  undefined

console.log(typeof score)

let valueInNumber = Number(score)
console.log(valueInNumber)

let valueInNum = Number(scoreTwo)
console.log(valueInNum)

console.log(Number(a))
console.log(Number(b))
console.log(Number(true))
console.log(Number(false))

let booleanIsLoggedIn = Boolean(1)
console.log(booleanIsLoggedIn)

console.log(Boolean("")) // Empty string -> False


// **************** Operations *****************


console.log(2+2)
console.log(2-2)
console.log(2**2) // Power 
console.log(2%3)

let str1 = "Hello"
let str2 = "Akshat"

let str3 = str1 + str2

console.log(str3)
console.log("1" + 2) // If string is in first place then all will be considered as string
console.log(1 + "2")
console.log(1 + "2" + 1) 
console.log("1" + "2")
console.log(3+1+"4")
console.log(+true)
console.log(-true)
console.log(2+ +true)
console.log(+"")

let num1,num2,num3

num1 = num2 = num3 = 2 + 2 // Not a good practice

let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)