let x = 1
a()
b()
console.log(x)
function a() {
    let x = 10
    console.log(x)
}

function b(){
    let x = 100
    console.log(x)
}

function c(){
    function d(){
        console.log("In the nested function d")
    }
    d()
}

c()

console.log(`Testing widnow ${this.x}`)