"use strict";
// let age = 30 
//Define type of a variable using TypeScript 
let age = 30;
let firstName = "Arefin";
let isFictional;
age = 31;
firstName = "Mobasher";
isFictional = true;
let planet = "Earth";
let moons = 1;
let isLearge = false;
planet = "Saturn";
moons = 145;
isLearge = true;
// null & undefined 
let something;
let anotherThing;
something = null;
anotherThing = undefined;
console.log("Hello, Bangladesh..!");
// arrays
let names = ['Mobasher', 'Arefin', 'Talha'];
let ages = [25, 28, 24];
// push valu at existing array 
names.push('browser');
ages.push(35);
// type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('lichi');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
// object literals 
let user = {
    firstName: 'Arefin',
    age: 24,
    id: 1
};
// change value of object 
user.firstName = 'Talha';
user.id = 7;
// type inference with object literals 
let person = {
    name: 'Mobasher',
    score: 33
};
person.name = 'Arefin';
person.score = 77;
const score = person.score;
// function 
function addTwoNumbers(a, b) {
    return a + b;
}
// function using arrow function 
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(3, 9);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference 
function formatGreeting(name, greeting) {
    {
        return `${greeting}, ${name}`;
    }
}
const result = formatGreeting('Arefin', 'Hello');
