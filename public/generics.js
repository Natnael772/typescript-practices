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
