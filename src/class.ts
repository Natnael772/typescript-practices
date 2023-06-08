class Pointt {
  x: number;
  y: number;
  // COnstructor
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// --strictPropertyInitialization setting controls if class fields need to be initialized in constructor
const pt1 = new Pointt();
pt1.x = 0;
pt1.y = 0;

//inheritance and super method
class Electronics {
  name: string;
  imei: number;
  constructor(name: string, imei: number) {
    this.name = name;
    this.imei = imei;
    console.log(`Parent class`);
  }
}
class Smartphone extends Electronics {
  constructor(name: string, imei: number) {
    super(name, imei);

    console.log("Child class");
  }
  welcome(): void {
    console.log("welcome");
  }
}

const myPhone = new Smartphone("Samsung", 2335865854);

//getter and setter
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get Name(): string {
    return this._name;
  }
  set Name(newname: string) {
    if (newname.length > 0) {
      this._name = newname;
    } else {
      console.log("invalid name");
    }
  }
}
const personn = new Person("Nati");
personn.Name = "";
console.log(personn.Name);
