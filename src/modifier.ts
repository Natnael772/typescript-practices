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
  public getInfo(): string {
    return `${this.name} is ${this.age} yeares old`;
  }
  private getAge(): number {
    return this.age;
  }
  protected getBreed(): string {
    return this.breed;
  }
  static getClassName(): string {
    return "Animal";
  }
}
const myAnimal = new Animall("Cat", 10, "Eth");
console.log(myAnimal);
