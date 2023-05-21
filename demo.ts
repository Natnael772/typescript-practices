const inputs = document.querySelector("input");
let x: string;
x = "me";

//checking change in data types
console.log(x);

const area = (diameter: number) => {
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

//objects
let person = {
  name: "nati",
  age: 21,
  dept: "software eng",
};

person.name = "miki"; //works fine
person.age = "young"; //error. can't change data type once we defined certain type in object. age must be number
person.age = 20; //works fine

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
