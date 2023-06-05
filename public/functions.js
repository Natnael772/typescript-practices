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
