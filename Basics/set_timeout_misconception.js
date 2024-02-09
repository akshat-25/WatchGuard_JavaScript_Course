console.log("Start")
 
setTimeout(function cb(){
    console.log("Callback")
}, 5000); // If we keep the timeout to 0, it is used for deferred execution.

console.log("End")


// let startDate = new Date().getTime()
// let endDate = startDate

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime()
// }


// console.log("While expires")