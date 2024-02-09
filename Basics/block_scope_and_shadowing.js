// Block is also known as compound statement.
var a = 100
let b = 200
{
    var a = 10 // This 'a' SHADOWS the above declared 'a' and it modifies the value of 'a', so if we access the value of 'a' outside of this block we will get 10.
    let b = 20 // This 'b' shadows the value of the above declared 'b' but it does not modify the value of 'b'.
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
console.log(b)
// In this b and c have Block scope. It means they are stored in a seperate memory space which is reserved for this block. 

// SHADOWING behaves the same way for function.

// What is ILLEGAL SHADOWING ?
// let x = 10
// {
//     var x = 20
// }

// We cannot shadow a 'let' variable inside a block using 'var'. But vice versa is true.
// Block scope also follows lexical scope.