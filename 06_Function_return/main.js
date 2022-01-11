// -=-=-=-=-=-=-=- return value -=-=-=-=-=-=-=-

function getSumma(a, b) {
    let result = a + b;
    //alert(`${a} + ${b} = ${result}`);

    // return value
    return result;
}

let res = getSumma(3, 12);

console.log("Result:", res);
console.log("Next:", ++res);

// Get Random Value
function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// guess the number

// let magicNumber = getRandomValue(1, 10);

// let guess;
// do {
//     guess = +prompt("Guess the number:")

//     if (guess == magicNumber) {
//         console.log("Great!");
//     }

// } while(guess != magicNumber);

// Factorial
// !5 = 1 * 2 * 3 * 4 * 5 = 120

function getFactorial(number) {
    
    let result = 1;
    for(let i = 2; i <= number; ++i) {
        result *= i;
    }
    return result; // return the value and finish the function
}

// console.log("!5 = ", getFactorial(5));
// console.log("!10 = ", getFactorial(10));

const maxValue = 170;

for(let i = 1; i <= 5000; ++i) {
    console.log(`!${i} = ${getFactorial(i)}`);
    if (i == maxValue) break; // end the cycle
}

function testReturn() {
    console.log("log...");
    console.warn("warning...");
    return; // end the function
    console.error("error...");
}

testReturn();
