const arr = [5, 1, 3, 2, 6]

const output = arr.map((x) => x.toString(2))

console.log(output)


// Filter odd values

function isOdd(x) {
    return x % 2
}

function isEven(x){
    return x % 2 === 0
}

const odd = arr.filter((x) => x % 2)

console.log(odd)

// Reduce -> 

// It is used at the place where you take all the elements of the array and come up with a single element. Eg - Sum of all the elements of the array, or max 


function findSum(arr){
    let sum = 0
    for(let i= 0;i<arr.length;i++){
        sum = sum + arr[i]
    }

    return sum
} 

console.log(findSum(arr))


const ans = arr.reduce(function(acc,curr){
    acc = acc + curr
    return acc
},initialValue=5)

console.log(ans)


const max = arr.reduce(function(acc,curr){
    if(acc < curr){
        acc = curr
    }
    return acc
},0)

console.log(max)