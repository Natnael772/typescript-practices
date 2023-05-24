"use strict";
const inputs = document.querySelector("input");
let x;
x = "me";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("nati", 22);
//error
// const user1: User = {
//   username: "nati",
// };
//error
// const user1: User = {
//   name: 12,
//   id: "na",
// };
const user1 = {
    name: "Nati",
    id: 1731,
};
console.log(user1);
//checking changeS in data types
console.log(x);
const area = (diameter) => {
    return diameter * Math.PI;
};
//Checking
console.log(area("yo"));
//array
let names = ["nati", "miki", "dani"];
console.log(names);
names.push(4); //error
console.log(names);
let numbers = [2, 4, 5, 6];
numbers.push("str"); //error
console.log(numbers);
//works fine if the array has mixed data types
let mixed = ["nati", 21, "developer"];
mixed.push(10); //works fine for mixed datas
mixed[0] = 5; //works
//Objects
let person = {
    name: "nati",
    age: 21,
    dept: "software eng",
};
person.name = "miki"; //works fine
// person.age = "young";
//error. can't change data type once we defined certain type in object. age must be number
// person.age = 20;
//works fine
//works fine
person = {
    name: "beki",
    age: 25,
    dept: "cs",
};
//error. property dept is missing. didn't match the initial structure.
person = {
    name: "miki",
    age: 22,
};
//Explicit types
let mycharacter;
let myage;
let isLoggedIn;
myage = "nnn"; //error. type 'string' is not assignable to type 'number'
myage = 25; //works
//arrays
let departments = [];
departments = ["cs", "se", "it"]; //works
departments.push("is"); //works
departments.push(2); //error
console.log(departments);
//union types
let mixedType = [];
//both work fine
mixedType.push("nn");
mixedType.push(2);
console.log(mixedType);
// mixedType.push(false); //error. it would work if
// let mixedType: (string | number|boolean )[] = [];
let uid;
//objects
//way1
let obj1;
obj1 = {
    name: "nati",
    age: 22,
};
//way2
let obj2;
obj2 = {
    name: "nati",
    age: 22,
};
// Dynamic/any types : looks like normal js
//they must be used with caution
let age;
age = 25;
console.log(age);
age = true;
console.log(age);
age = "twenty two";
console.log(age);
age = {
    myage: 40,
};
console.log(age);
let mixedArr = [];
//all work fine
mixedArr.push(33);
mixedArr.push("nn");
mixedArr.push(false);
let newobj;
newobj = {
    name: "na",
    age: 26,
    dept: "se",
};
console.log(newobj);
