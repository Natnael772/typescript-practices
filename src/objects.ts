//objects
function greet1(person: { name: string; age: number }) {
  console.log(`Hello ${person.name}`);
}

//alternatively we can use interface
interface Person {
  name: string;
  age: number;
}
function greet2(person: Person) {
  console.log(`Hello ${person.name}`);
}
//or else we can use type aliases
type Persoon = {
  name: string;
  age: number;
};
function greet3(person: Persoon) {
  console.log(`Hello ${person.name}`);
}

//optional properties
interface PaintOptions {
  xPos?: number;
  yPos?: number;
}

//object destructuring
function paintShape({ xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(`x coordinate at ${xPos}`);
  console.log(`y coordinate at ${yPos}`);
}

//Index signatures
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}
const signature1: NumberOrStringDictionary = {
  name: "str",
  length: 4,
};
console.log(signature1);

//inheritance
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

//intersection types
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
type ColorfulCircle = Colorful & Circle;
function draw(circle: ColorfulCircle) {
  console.log(`Color : ${circle.color}`);
  console.log(`Radius : ${circle.radius}`);
}

draw({ color: "blue", radius: 23 });

//type aliases
interface Box1<Type> {
  contents: Type;
}
type Box2<Type> = {
  contents: Type;
};
const ex: Box1<string> = { contents: "con" };
const ex2: Box2<number[]> = {
  contents: [2],
};

//tuple
let myTuple1: [string, number, boolean];
myTuple1 = ["Hello", 42, true];

console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);

//enum
enum Role {
  ADMIN,
  SUPERADMIN,
}
let user: {
  name: string;
  role: Role;
};
const user11 = {
  name: "nati",
  role: Role.ADMIN,
};
