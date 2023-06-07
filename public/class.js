"use strict";
class Pointt {
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
    constructor(name, imei) {
        this.name = name;
        this.imei = imei;
        console.log(`Parent class`);
    }
}
class Smartphone extends Electronics {
    constructor(name, imei) {
        super(name, imei);
        console.log("Child class");
    }
}
