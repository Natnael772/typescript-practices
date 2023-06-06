//keyof type operator
type Personn = {
  name: string;
  age: number;
  address: string;
};
// const p1: Personn = { name: "nati" };

type PersonKeys = keyof Person;
// Personkeys is a union type 'name' | 'age' | 'address'
function getProperty(obj: Personn, key: keyof Person) {
  return obj[key];
}
const p1: Personn = { name: "nati", age: 22, address: "eth" };
const nameVal = getProperty(p1, "name");

//typeof
let s = "hello";
let n: typeof s = "s";
console.log(typeof n); //string

//indexed access types
type Car = { name: string; price: number };
type name = Car["name"];
//type name:string
type union = Car["name" | "price"];
//type union :string|number
