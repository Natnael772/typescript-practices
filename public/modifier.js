"use strict";
//modifiers are keywords that can be used tp control the visibilitu and accessiblility of class members, variables, and functions
//public,provate,protected,readonly,static, abstract
class Animall {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    getInfo() {
        return `${this.name} is ${this.age} yeares old`;
    }
    getAge() {
        return this.age;
    }
    getBreed() {
        return this.breed;
    }
    static getClassName() {
        return "Animal";
    }
}
const myAnimal = new Animall("Cat", 10, "Eth");
console.log(myAnimal);
