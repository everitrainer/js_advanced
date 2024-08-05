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

