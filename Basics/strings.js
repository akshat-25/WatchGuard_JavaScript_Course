const name = "Akshat"
const repoCount = 20

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Parakh") // It has becone an object

// console.log(gameName[0])

for (let i = 0; i < gameName.length; i++) {
   console.log(gameName[i])
    
}

console.log(gameName.__proto__)

gameName.slice(2,5)

x = gameName.toUpperCase()

console.log(gameName.toUpperCase())

console.log(gameName)

const anotherName = gameName.slice(-8,4)
console.log(anotherName)

const newString = "    Akshat    \n"
console.log(newString)
console.log(newString.trim())

const url = "https://akshat.com/akshat%90parakh"

console.log(url.replace('%90', '-'))

console.log(url.includes('akshat'))

const example = "My name is Akshat Parkah"

console.log(example.split(" "))