//uppercase
type Greeting = "hello World";
type ShoutyGreeting = Uppercase<Greeting>;

//lowercase
type QuietGreeting = Lowercase<Greeting>;

//capitalize : converts the 1st character to uppercase
type Cap = Capitalize<Greeting>;

//uncapitalize
type Uncap = Uncapitalize<Greeting>;
