// JavaScript does not waits for anyone.

function x(){
    var i = 1
    setTimeout(() => {
        console.log(i)
    }, 1000);
    console.log("Akshat Parakh")
}

x()

function y(){
    for(var i = 1;i<=5;i++){
        function close(i){
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        close(i)
    }
  
    console.log("Akshat")
}

y()


// function e(){
//     for(let i = 1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("In the loop with let")
// }

// e()

