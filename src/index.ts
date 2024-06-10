// let age = 30 

//Define type of a variable using TypeScript 

let age: number = 30
let firstName: string = "Arefin"
let isFictional: boolean

age = 31
firstName = "Mobasher"
isFictional = true


let planet = "Earth"
let moons = 1
let isLearge = false


planet = "Saturn"
moons = 145
isLearge = true


// null & undefined 

let something: null
let anotherThing: undefined


something = null 
anotherThing = undefined


console.log("Hello, Bangladesh..!")


// arrays

let names: string[] = ['Mobasher', 'Arefin', 'Talha']
let ages: number[] = [25, 28, 24]

// push valu at existing array 
names.push('browser')
ages.push(35)

// type inference with arrays

let fruits = ['apples', 'pears', 'bananas', 'mangos']

fruits.push('lichi')

const f = fruits[3]

let things = [1, true, 'hello']

const t = things[0]


// object literals 

let user: {firstName: string, age: number, id: number} = {
    firstName: 'Arefin',
    age: 24,
    id: 1
}

// change value of object 

user.firstName = 'Talha'
user.id = 7


