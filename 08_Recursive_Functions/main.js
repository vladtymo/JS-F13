function writeBreak() { document.write("<br/>"); };

function showStars(count) {

    for (let i = 0; i < count; i++) {
        document.write("*");
    }
}

// Recursive function - invokes itself
function showStarsRecursive(count) {

    if (count < 1) return;

    document.write("*");
    showStars(count - 1);
}

showStars(10);          writeBreak();
showStarsRecursive(10); writeBreak();

// Calculate Factorial of the Number
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function getFactorial(number) {

    if (number == 1) return 1;
    return number * getFactorial(number - 1);
}

document.write('Factorial of 5 = ' + getFactorial(5));      writeBreak();
document.write('Factorial of 7 = ' + getFactorial(7));      writeBreak();
document.write('Factorial of 12 = ' + getFactorial(12));    writeBreak();

// Show Reversed Number
// 1234 - 4321

function showReversedNumber(number) {

    if (number < 1) return;

    let lastDigit = number % 10;
    document.write(lastDigit);
    
    // remove the last digit
    number -= lastDigit;
    number /= 10;

    showReversedNumber(number);
}

showReversedNumber(1234);