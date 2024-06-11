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


// type inference with object literals 


let person = {
    name: 'Mobasher',
    score: 33
}

person.name = 'Arefin'
person.score = 77

const score = person.score


// function 

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

// function using arrow function 

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

addTwoNumbers(3, 9)
subtractTwoNumbers(3, 9)


function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1])


// return type inference 


function formatGreeting(name: string, greeting: string): string {{
    return `${greeting}, ${name}`
}}

const result = formatGreeting('Arefin', 'Hello')



// any type 
// variable can be anytype

let PersonAge: any
// title can have any type
let title

PersonAge = 30
PersonAge = false

title = 25 
title = {
    hello: 'world'
}
title = 'false'


//any type in Arrays 

let someThings: any[] = ['hello', true, 30, null]

someThings.push({id: 123})


// functions & any 

function addTogether(value: any): any {
    return value + value
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(3)

//any type is usefull when migrating from js to ts 
// because using any won't cause error initially 



// ----------------

// tuples 

let person1: [string, number, boolean] = ['Arefin', 24, true]


// tuples examples 

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]


//function 

function useCoords(): [number, number] {
    // get coords 
    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords() 


