"use strict";
//Class
class Phone {
    constructor(name, imei) {
        this.name = name;
        this.imei = imei;
    }
    welcome() {
        console.log("Welcome");
        return "Welcome";
    }
    switch() {
        console.log("Switched on");
    }
    static displayType() {
        console.log("The device is mobile phone");
    }
}
//Static members belong to the class itself rather than instances of the class. They can be accessed directly on the class without creating an object.
Phone.deviceType = "mobile phone";
//static members : variables and functions
console.log(Phone.deviceType);
Phone.displayType();
const phone1 = new Phone("samsung", "1234");
console.log(phone1);
phone1.switch();
phone1.welcome();
