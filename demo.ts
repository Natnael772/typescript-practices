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
