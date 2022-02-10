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

// -=-=-=-=-=-=- Math -=-=-=-=-=-=-

console.log(Math.pow(2, 4));      // 16      
console.log(Math.floor(5.02934)); // 5
console.log(Math.round(6.5));     // 7
console.log("Random value:", Math.random());    // 0...1

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

// Operator Precedence
// ++ -- (prefix / postfix forms)

let a = 5;

let b = ++a;

console.log(`a = ${a}, b = ${b}`); // 6 6

let array = [5, 6, 7, 8];

let count = array.length;
array[count++] = 9;
//++count;

array[count++] = 10;
//++count;

