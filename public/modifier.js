"use strict";
//modifiers are keywords that can be used tp control the visibilitu and accessiblility of class members, variables, and functions
//public,provate,protected,readonly,static, abstract
class Animall {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    //private methods are not directly visible or accessible to objects of the class in which they are defined. Private methods can only be accessed and called within the class itself, not from external code or objects.
    privateMethod() {
        console.log("Private method called");
    }
    //public methods are accessible everywhere
    publicMethod() {
        console.log("Animal");
        this.privateMethod();
    }
    getInfo() {
        return `${this.name} is ${this.age} yeares old`;
    }
    getAge() {
        return this.age;
    }
    //Protected methods can be accessed and invoked within the class itself as well as in its subclasses.
    protectedMethod() {
        console.log("protected method");
    }
    getBreed() {
        return this.breed;
    }
    //static method
    //Static methods can be called directly on the class without creating an instance of the class.
    static staticMethod() {
        console.log("Static method");
    }
}
const myAnimal = new Animall("Cat", 10, "Eth");
console.log(myAnimal);
console.log(myAnimal.getInfo());
myAnimal.publicMethod();
class Cat extends Animal {
    makeCatSound() {
        this.makeCatSound();
    }
}
