"use strict";
//Boxed types
//In TypeScript, boxed types refer to the wrapper objects that are used to represent primitive types as objects. The primitive types in JavaScript and TypeScript include number, string, and boolean.
//By default, these primitive types are not objects and do not have any properties or methods associated with them.
//However, TypeScript provides wrapper objects for these primitive types, allowing you to treat them as objects and access their associated properties and methods.
//These wrapper objects are referred to as boxed types.
const num = new Number(12);
console.log(num.toFixed());
const str = new String("hello");
console.log(str.charAt(0));
const bool = new Boolean(true);
console.log(bool.toString());
function greet(msg) {
    console.log("he");
    return "Hello ";
}
greet("");
class Three {
    constructor() {
        this.p = "hello";
    }
}
let aa = { p: "hi" };
let bb = aa;
bb = new Three();
//Object instantiation in typescipr
//1. class based instantiation
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    welcome() {
        console.log("welcome");
        return "welcome";
    }
}
const p1 = new Person("nati", 22);
p1.welcome();
const point = { x: 10, y: 20 };
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
function start(arg) {
    if (typeof arg == "string")
        return `${arg.toString()} ${arg}`;
    else if (Array.isArray(arg)) {
        return "array";
    }
    else if (typeof arg == "function") {
        return "function";
    }
    return typeof arg;
}
console.log(start(() => "str"));
let mynums;
let mynums2;
let mynames;
let mynames2;
//generic type
let un1 = [1, "aa"];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(typeof myColor);
if (myColor === Color.Green) {
    console.log(`my color is red`);
}
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Mon"] = 0] = "Mon";
    DayOfWeek[DayOfWeek["Tue"] = 1] = "Tue";
    DayOfWeek[DayOfWeek["Wed"] = 2] = "Wed";
    DayOfWeek[DayOfWeek["Thu"] = 3] = "Thu";
    DayOfWeek[DayOfWeek["Fri"] = 4] = "Fri";
    DayOfWeek[DayOfWeek["Sat"] = 5] = "Sat";
    DayOfWeek[DayOfWeek["Sun"] = 6] = "Sun";
})(DayOfWeek || (DayOfWeek = {}));
function getDayMessage(day) {
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
