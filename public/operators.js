"use strict";
// Personkeys is a union type 'name' | 'age' | 'address'
function getProperty(obj, key) {
    return obj[key];
}
const p1 = { name: "nati", age: 22, address: "eth" };
const nameVal = getProperty(p1, "name");
