function a(){
    console.log(b)
}

// function c is lexically inside the global scope
function c(){
    d()
    // function d is lexically inside the function c
    function d() {
        console.log(b)
    }
}

var b = 10

// a()
c() 
// Lexical environment is the local memory along with the lexical env. of its parent

// What is lexical ?
// it means hierarchy or sequence
 

//SCOPE CHAIN is the chain of all the lexical environments and the parent references.

// If JS Engine does not find anything in the local memory, it goes next level of the scope chain.