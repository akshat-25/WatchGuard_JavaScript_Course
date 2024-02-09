// What is a callback function ?

setTimeout(() => {
    console.log("Timer")
}, 5000);


function x(y){
    console.log("x")
    y()
}

x(function y(){
    console.log("y")
})

// Javascript is a synchronous and single-threaded language.

function attachEventListener(){
    let count = 0
    document.getElementById("clcikMe")
    .addEventListener("click", function xyz(){
    console.log("Button CLicked", ++count)
})
}

attachEventListener()