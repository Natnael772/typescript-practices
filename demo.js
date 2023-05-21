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
