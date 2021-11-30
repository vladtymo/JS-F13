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

// Arifmetic Operators: + - * / %
result = (2 + 2) * 2;
console.log(`2 + 2 * 2 = ${result}`);

price = +prompt("Enter product price:");        // +string - convert string to number
countity = +prompt("Enter countity of product:");

console.log("price type:", typeof(price));
console.log("countity type:", typeof(countity));

totalPrice = price * countity;
console.log(`Total Price: ${totalPrice}$`);



