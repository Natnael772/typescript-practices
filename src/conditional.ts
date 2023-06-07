interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string;

class DogImpl implements Dog {
  live() {
    console.log("The dog is living");
  }
  woof() {
    console.log("woof");
  }
}

const dog: Example1 = 42;
console.log(dog);
