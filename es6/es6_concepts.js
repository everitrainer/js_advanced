// 1. Template Literal

const cmpName = "Everi"

console.log("Company name is " + cmpName)
console.log(`Company name is ${cmpName}`) // Template Literal


// 2. Destructuring
// Object

const company = { "name": "Everi", "place": "Mangaluru", "type": "Tech Company" }
// const compName = company.name
// const place = company.place
// const type = company.type

const { name: compName, place, type } = company;
console.log(`name ${compName} place ${place} type ${type}`)

const subjects = ["Angular", "NodeJS", "C#"]

// const sub1 = subjects[0]
// const sub2 = subjects[1]
// const sub3 = subjects[2]

const [sub1, , sub3] = subjects

console.log(`sub1 ${sub1} sub2 ${sub3}`)


// 3. Default parameters

function hike(salary, percent = 10) {
    return salary + salary * percent / 100
}
const latestSal1 = hike(100000)
const latestSal2 = hike(100000, 30)
console.log(latestSal1) // 110k
console.log(latestSal2) // 130k


// 4. Rest or Spread

function sum(a, b, ...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) sum += args[i]
    return sum;
}

console.log(sum(2, 3, 5, 3, 2, 2))
console.log(sum(2, 4, 2, 8))


const { name: tempName, place: newPlace, ...copyComp } = company
console.log(tempName)
console.log(newPlace)
console.log(copyComp)

// 5. Spread
const arr1 = [2, 3, 5, 3, 2, 2];
const arr2 = [2, 3, 5, 3, 7, 8, 8, 9]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const food = "PP";
const price = 25;
const isSpicy = true;

// 6.Object Literal Extensions
const obj = {
    food,
    price,
    isSpicy,
    sum

}
console.log(obj)
