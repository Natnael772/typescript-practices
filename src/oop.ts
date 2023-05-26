//Class
class Phone {
  private imei: string;
  public name: string;

  //Static members belong to the class itself rather than instances of the class. They can be accessed directly on the class without creating an object.
  static deviceType: string = "mobile phone";
  constructor(name: string, imei: string) {
    this.name = name;
    this.imei = imei;
  }
  public welcome(): string {
    console.log("Welcome");
    return "Welcome";
  }
  public switch(): void {
    console.log("Switched on");
  }

  static displayType(): void {
    console.log("The device is mobile phone");
  }
}

//static members : variables and functions
console.log(Phone.deviceType);
Phone.displayType();
const phone1 = new Phone("samsung", "1234");
console.log(phone1);
phone1.switch();
phone1.welcome();
