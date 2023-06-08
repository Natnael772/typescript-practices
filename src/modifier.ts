//modifiers are keywords that can be used tp control the visibilitu and accessiblility of class members, variables, and functions
//public,provate,protected,readonly,static, abstract

class Animall {
  public name: string;
  private age: number;
  protected breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  //private methods are not directly visible or accessible to objects of the class in which they are defined. Private methods can only be accessed and called within the class itself, not from external code or objects.
  private privateMethod(): void {
    console.log("Private method called");
  }
  //public methods are accessible everywhere
  public publicMethod(): void {
    console.log("Animal");
    this.privateMethod();
  }

  public getInfo(): string {
    return `${this.name} is ${this.age} yeares old`;
  }
  private getAge(): number {
    return this.age;
  }

  //Protected methods can be accessed and invoked within the class itself as well as in its subclasses.

  protected protectedMethod(): void {
    console.log("protected method");
  }
  protected getBreed(): string {
    return this.breed;
  }
  //static method
  //Static methods can be called directly on the class without creating an instance of the class.
  static staticMethod(): void {
    console.log("Static method");
  }
}
const myAnimal = new Animall("Cat", 10, "Eth");
console.log(myAnimal);
console.log(myAnimal.getInfo());
myAnimal.publicMethod();

class Cat extends Animal {
  public makeCatSound(): void {
    this.makeCatSound();
  }
}
