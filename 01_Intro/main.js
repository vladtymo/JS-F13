// Ctrl+K+F         - formatting
// Alt+ArrowUp/Down - move line up/dowm

console.log("Hello world!");
console.warn("Some warning!");
console.error("Something went wrong!");

// lowerCamelCase +
// UpperCamelCase
// snake_case

// -=-=-=-=-=-=- Data Types -=-=-=-=-=-=-
// variables:

login = "super_user2233"; // string
countity = 23;            // number
isValid = true;           // boolean (true / false)

console.log("Hello, " + login + "!");
console.log(`Hello, ${login}!`);    // interpolation

console.log("login type:", typeof (login));
console.log("countity type:", typeof (countity));
console.log("isValid type:", typeof (isValid));

// -=-=-=-=-=-=- Browser Dialogs -=-=-=-=-=-=-
alert("Hello from Alert!");

userName = prompt("Enter your name:");
console.log(userName + "...");

number = +prompt("Enter a number:");
console.log("Number:", number);