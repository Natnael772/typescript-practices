//strict:true
//setting "strict": true means that you are enabling all strict type-checking options provided by TypeScript. It is a shorthand way of enabling several individual strictness flags.

//When "strict" is set to true, the following strictness options are enabled:

//1. NoImplicitAny
//TypeScript will issue an error when it cannot infer the type of a variable implicitly. You are encouraged to provide explicit type annotations.

// function add(a, b) {
//     return a + b;
//   }
//error:  type of the parameter isnot specified. we must explicitly specify types of the parameters.

// function add(a: number, b: number) {
//     return a + b;
//   }
//works fine
//2. strictNullChecks
// /When using the strictNullChecks compiler option in TypeScript, you need to handle nullable and undefinedable values explicitly in your code.

// let name: string;
// name = null; // No error without strictNullChecks

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// greet(null); // No error without strictNullChecks

//But if enabled, it will be error
// let name: string;
// name = null; // Error: Type 'null' is not assignable to type 'string'

// function greet(name: string) {
//   console.log(`Hello, ${name}!`);
// }

// greet(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string'

//Assigning null to a variable of type string (name) raises an error because null is not assignable to the string type.

//Passing null as an argument to the greet function raises an error because the function's parameter (name) is explicitly declared as a string, and null is not assignable to that type.

//noEmiltOnError: our ts code will only compile if it has no error.

//strictNullChecks
// let name: string | null = null; // Valid, explicitly allowing null
// let age: number = null; // Error, assigning null to a non-nullable typ
