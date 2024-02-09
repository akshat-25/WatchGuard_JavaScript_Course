const users = [
    {firstName: "akshat", lastName: "parakh", age: 22},
    {firstName: "mudit", lastName: "parakh", age: 16},
    {firstName: "ayush", lastName: "tomar", age: 21},
    {firstName: "vaishali", lastName: "ranjan", age: 21},
    {firstName: "ritika", lastName: "narang", age: 30},
]


// list of full name of all the users.

const output = users.map(x => x.firstName +" "+ x.lastName)

console.log(output)

// How many users have a particular age.

const userData =  users.reduce((acc,curr)  => {

    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }

    return acc
},{})


console.log(userData)

// Chaining of filter , map 

const filterUser = users.filter((user) => user.age < 30).map((user) => user.firstName)

console.log(filterUser)

