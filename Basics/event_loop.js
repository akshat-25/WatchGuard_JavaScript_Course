// Time, tide and JavaScript waits for none.


console.log("Start")

setTimeout(() => {
    console.log("Callback")
}, 5000);
 
console.log("End")

// All the callback functions which returns through promises will go inside the microtask queue.

// There is some mutation observer. It keeps on checking whether there is some mutation in the DOM tree or not.

// STARVATION OF THE TASKS INSIDE THE CALLBACK QUEUE -> It occurs when some microtask creates a new microtaks in microtask queue.