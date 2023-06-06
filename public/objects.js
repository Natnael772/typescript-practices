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
function draw(circle) {
    console.log(`Color : ${circle.color}`);
    console.log(`Radius : ${circle.radius}`);
}
draw({ color: "blue", radius: 23 });
const ex = { contents: "con" };
const ex2 = {
    contents: [2],
};
//tuple
let myTuple1;
myTuple1 = ["Hello", 42, true];
console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUPERADMIN"] = 1] = "SUPERADMIN";
})(Role || (Role = {}));
let user;
const user11 = {
    name: "nati",
    role: Role.ADMIN,
};
