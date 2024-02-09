// Let and Const declarations are Hoisted but they are hoised differently then the "var" declarations.

// Temporal Dead Zone is the time since when this "let" variable was hoisted and till it is initialized some value.

// In case of browsers the global object is window.
console.log(a)
// console.log(a) -> Error

let a = 10 

// let a = 20  It is a syntax error as 'a' is already defined above.
var b = 100

console.log(a)