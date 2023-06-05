"use strict";
//call signature
// type DesirableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DesirableFunction) {
//   console.log(fn.description);
// }
// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";
// doSomething(myFunc);
const myFunction = (arg) => arg > 0;
myFunction.description = "default description";
console.log(myFunction.description);
console.log(myFunction(4));
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const Point2DConstructor = Point2D;
//generic functions
function identity(arg) {
    return arg;
}
let resultString = identity("hello");
console.log(resultString);
let resultNumber = identity(42);
console.log(resultNumber);
//optional parameters
function fn(x) {
    console.log(x);
}
fn();
fn(10);
let aa = [];
function processInput(value) {
    if (typeof value === "string") {
        console.log("Processing string:", value);
    }
    else if (typeof value === "number") {
        console.log("Processing number:", value);
    }
    else if (typeof value === "boolean") {
        console.log("Processing boolean:", value);
    }
}
processInput("Hello");
processInput(20);
processInput(true);
