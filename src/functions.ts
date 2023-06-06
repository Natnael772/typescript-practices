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

type DesirableFunction = {
  description: string;
  (someArg: number): boolean;
};
const myFunction: DesirableFunction = (arg) => arg > 0;
myFunction.description = "default description";
console.log(myFunction.description);
console.log(myFunction(4));

//construct signature
type Point = {
  x: number;
  y: number;
};
type PointConstructor = {
  new (x: number, y: number): Point;
};
class Point2D implements Point {
  constructor(public x: number, public y: number) {}
}
const Point2DConstructor: PointConstructor = Point2D;

//generic functions
function identity<T>(arg: T): T {
  return arg;
}
let resultString = identity<string>("hello");
console.log(resultString);

let resultNumber = identity<number>(42);
console.log(resultNumber);

//optional parameters
function fn(x?: number): any {
  console.log(x);
}

fn();
fn(10);

let aa: Array<string | number> = [];

//function overloading in typescript
function processInput(value: string): void;
function processInput(value: number): void;
function processInput(value: boolean): void;

function processInput(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("Processing string:", value);
  } else if (typeof value === "number") {
    console.log("Processing number:", value);
  } else if (typeof value === "boolean") {
    console.log("Processing boolean:", value);
  }
}
processInput("Hello");
processInput(20);
processInput(true);

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }
// console.log(add(2, 3));
// console.log(add('Hello, ', 'world')

class Animal {
  makeSound(): void {
    console.log("Generic animal sound");
  }
}
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}
const cat1 = new Cat();
cat1.makeSound();

const a = () => {};
console.log(typeof Cat);
