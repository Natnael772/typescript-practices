"use strict";
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
