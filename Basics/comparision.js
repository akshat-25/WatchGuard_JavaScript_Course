console.log("2" > 1)
console.log("02" > 1);

console.log(null > 0)
console.log(null == 0) // == and comparisions > < >= <= work differently. Comparisions convert null to a number, treating it is as 0.
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === -> Strict Check it check datatype as well as value

console.log("2" === 2)
console.log(2 === 2)