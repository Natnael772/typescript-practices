"use strict";
//objects
function greet1(person) {
    console.log(`Hello ${person.name}`);
}
function greet2(person) {
    console.log(`Hello ${person.name}`);
}
function greet3(person) {
    console.log(`Hello ${person.name}`);
}
//object destructuring
function paintShape({ xPos = 0, yPos = 0 }) {
    console.log(`x coordinate at ${xPos}`);
    console.log(`y coordinate at ${yPos}`);
}
const signature1 = {
    name: "str",
    length: 4,
};
console.log(signature1);
