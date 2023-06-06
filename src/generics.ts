//generic identity function
//to capture the type of the argument in such a way that we can also use it to denote what is being returned.
function identity<Type>(arg: Type): Type {
  return arg;
}

// let myIdentity: <Type>(arg: Type) => Type = identity;
// let myIdentity = <Type>(arg: Type): Type => {
//   return arg;
// };
function myIdentity<Type>(arg: Type): Type {
  return arg;
}
myIdentity("2");
myIdentity("Nati");

//generic interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdent: GenericIdentityFn = identity;

//generic class
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}
let myGenNo = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenNo);
