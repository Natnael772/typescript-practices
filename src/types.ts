//Boxed types
//In TypeScript, boxed types refer to the wrapper objects that are used to represent primitive types as objects. The primitive types in JavaScript and TypeScript include number, string, and boolean.
//By default, these primitive types are not objects and do not have any properties or methods associated with them.
//However, TypeScript provides wrapper objects for these primitive types, allowing you to treat them as objects and access their associated properties and methods.
//These wrapper objects are referred to as boxed types.

const num: Number = new Number(12);
console.log(num.toFixed());

const str: String = new String("hello");
console.log(str.charAt(0));

const bool: Boolean = new Boolean(true);
console.log(bool.toString());

function greet(msg: string): string {
  console.log("he");
  return "Hello ";
}

greet("");

type One = {
  p: string;
};
interface Two {
  p: string;
}
class Three {
  p = "hello";
}
let aa: One = { p: "hi" };
let bb: Two = aa;
bb = new Three();

//Object instantiation in typescipr
//1. class based instantiation
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  welcome(): string {
    console.log("welcome");
    return "welcome";
  }
}
const p1 = new Person("nati", 22);
p1.welcome();

//2.Interface based instantiation
// In TypeScript, interfaces are used to define the shape of objects. Although interfaces alone cannot be instantiated, you can use them to describe the structure of an object, and then create an object that adheres to that structure.
interface Point {
  x: number;
  y: number;
}
const point: Point = { x: 10, y: 20 };
console.log(point);
//3. Object literal instantiation: TypeScript allows you to directly create objects using object literals without the need for classes or interfaces. This approach is useful for creating simple objects without behavior or when you don't need the additional features provided by classes or interfaces.
const student = {
  name: "Nati",
  age: 30,
  greet: () => {
    console.log(`Welcome ${student.name}`);
  },
};

console.log(student);
student.greet();

//Union
function start(
  arg: string | string[] | (() => string) | { s: string }
): string {
  if (typeof arg == "string") return `${arg.toString()} ${arg}`;
  else if (Array.isArray(arg)) {
    return "array";
  } else if (typeof arg == "function") {
    return "function";
  }
  return typeof arg;
}
console.log(start(() => "str"));

//Intersection
interface Book {
  book_id: number;
  book_name: string;
}
interface Author {
  author_id: number;
  author_name: string;
}
type intersected_type = Book & Author;
let intersected_type_obj1: intersected_type = {
  book_id: 1,
  book_name: "Typescript is awesome",
  author_id: 202,
  author_name: ":Natty",
};
console.log(intersected_type_obj1);

//generic type
let un1: Array<number | string> = [1, "aa"];

//Enum
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(typeof myColor);
if (myColor === Color.Green) {
  console.log(`my color is red`);
}

enum DayOfWeek {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}
function getDayMessage(day: DayOfWeek): string {
  switch (day) {
    case DayOfWeek.Mon:
      return "monday";
    case DayOfWeek.Tue:
      return "tuesday";
    case DayOfWeek.Wed:
      return "wednesday";
    case DayOfWeek.Thu:
      return "thursday";
    case DayOfWeek.Fri:
      return "friday";
    case DayOfWeek.Sat:
      return "saturday";
    case DayOfWeek.Sun:
      return "sunday";
  }
  return "invalid";
}
console.log(getDayMessage(DayOfWeek.Sat));

function pad(s: string, n: number, direction: "left" | "right"): string {
  console.log(s, n, direction);
  return direction;
}
let s = "right";
pad("hi", 20, s);
//error: because the third argument s is expected to have a type of "left" | "right", which is a string literal type representing either the string "left" or the string "right"
// the variable s is defined as a regular string with the value "right". Since it's not explicitly annotated with a type, TypeScript infers its type as string. When you try to pass s as the third argument to the pad function, it results in a type error because a general string type is not assignable to the specific string literal type "left" | "right".
//To resolve this error, Assign s with a valid string literal value of "left" or "right":
let s3: "left" | "right" = "right";
pad("hi", 20, s3);

//works
// pad("hi", 39, "right");

//String vs string literal
// let name: string = "Alice";
//string literal:
// let direction: "left" | "right" = "left";
// let fruit: "apple" | "banana" | "orange" = "banana";

//use declare to define the type of an external JavaScript function in TypeScript:
// declare is used to tell the compiler "this thing (usually a variable) exists already, and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript".
// declare function greet(name: string): void;

// greet("Alice");

// type alias
type gender = "male" | "female";
let m: gender = "male";
let f: gender = "female";
console.log(m, f);

// type Car = {
//   model: string;
//   type: string;
//   year: number;
// };
type CarModel = string;
type CarType = string;
type CarYear = number;
type Car = {
  model: CarModel;
  type: CarType;
  year: CarYear;
};

const myCar: Car = {
  model: "Toyota",
  type: "Automotive",
  year: 2023,
};
console.log(myCar);
