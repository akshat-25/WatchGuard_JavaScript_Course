// A function which takes another function as an arguement or returns a function is called Higher Order Function.

const radius = [3 , 1, 2, 4]

const area = function(radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const diameter = function(radius){
    return 2 * radius
}

Array.prototype.calculate = function(logic){
    const output = []
    for(let i = 0;i< this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))


// console.log(radius.map(area))

console.table(radius.calculate(area))