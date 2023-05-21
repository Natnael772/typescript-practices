var inputs = document.querySelector("input");
var x;
x = "me";
//checking change in data types
console.log(x);
var area = function (diameter) {
    return diameter * Math.PI;
};
//Checking
console.log(area("yo"));
//array
var names = ["nati", "miki", "dani"];
console.log(names);
names.push(4); //error
console.log(names);
var numbers = [2, 4, 5, 6];
numbers.push("str"); //error
console.log(numbers);
//works fine if the array has mixed data types
var mixed = ["nati", 21, "developer"];
mixed.push(10); //works fine for mixed datas
mixed[0] = 5; //works
//objects
var person = {
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
var mycharacter;
var myage;
var isLoggedIn;
myage = "nnn"; //error. type 'string' is not assignable to type 'number'
myage = 25; //works
