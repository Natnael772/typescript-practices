"use strict";
//generic identity function
//to capture the type of the argument in such a way that we can also use it to denote what is being returned.
function identity(arg) {
    return arg;
}
// let myIdentity: <Type>(arg: Type) => Type = identity;
// let myIdentity = <Type>(arg: Type): Type => {
//   return arg;
// };
function myIdentity(arg) {
    return arg;
}
myIdentity("2");
myIdentity("Nati");
function identity(arg) {
    return arg;
}
let myIdent = identity;
//generic class
class GenericNumber {
    constructor(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}
let myGenNo = new GenericNumber(0, (x, y) => x + y);
console.log(myGenNo);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
