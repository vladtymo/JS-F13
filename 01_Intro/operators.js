// -=-=-=-=-=-=- Operators -=-=-=-=-=-=-

// Arifmetic Operators: + - * / %

a = 20, b = 3;
console.log(`${a} + ${b} =`, a + b);
console.log(`${a} - ${b} =`, a - b);
console.log(`${a} * ${b} =`, a * b);
console.log(`${a} / ${b} =`, a / b);
console.log(`${a} % ${b} =`, a % b);

console.log(5 + "5");
console.log("5" + 5);

balance = 10;
koef = 1.8;
result = balance * koef / 100;

result = (2 + 2) * 2;
console.log(`2 + 2 * 2 = ${result}`);

price = +prompt("Enter product price:");        // +string - convert string to number
countity = +prompt("Enter countity of product:");

console.log("price type:", typeof(price));
console.log("countity type:", typeof(countity));

totalPrice = price * countity;
console.log(`Total Price: ${totalPrice}$`);

// Logical Operators: > < >= <= == !=

number = 10;
console.log(number > 10);
console.log(number < 10);
console.log(number >= 10);
console.log(number <= 10);
console.log(number == 10);
console.log(number != 10);

isBigger = number > 5;
console.log("IsValid type:", typeof(isBigger));

count = +prompt("Enter an amount of products (max 25):");

// if (count < 0) { 
//     // if expression equals true
//     console.warn("Invalid value!");
// }
// if (count > 25) {
//     console.warn("Invalid value!");
// }

// Logical and: &&
// Logical or: ||

if (count >= 0 && count <= 25) {
    console.log("Good!");
}

color = prompt("Enter grayscale color:");

if (color == "White" || color == "Black") {
    console.log("Great color!");
}
else {
    console.log("Bad Color!");
}

// if (color != "White" && color != "Black") {
//    console.log("Bad Color!");
// }

console.log(Math.pow(2, 4));      // 16      
console.log(Math.floor(5.02934)); // 5
console.log(Math.round(6.5));     // 7
console.log("Random value:", Math.random());    // 0...1