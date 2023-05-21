const inputs = document.querySelector("input");
let x: string;
x = "me";

//checking change in data types
x = 12;
console.log(x);

const area = (diameter: number) => {
  return diameter * Math.PI;
};

//Checking
console.log(area("yo"));
