// -=-=-=-=-=-=- Functions -=-=-=-=-=-=-

// let userName = prompt("Enter your name:");
// document.write(`<p>Hello, ${userName}</p>`);

// Create function

function ShowUserName() {

    let userName = prompt("Enter your name:");
    //document.write(`<p>Hello, ${userName}</p>`);
    console.log(`Hello, ${userName}!`);
}

// Execute
ShowUserName();
ShowUserName();
ShowUserName();

// Set Function Parameter
function ShowNumbers(max) {

    document.write(`Number [1...${max}]:`);
    for (let i = 1; i <= max; ++i) {
        
        document.write(`<span>${i}, </span>`);
    }
    document.write(`<br>`);
}

let limit = 10 * 2;

ShowNumbers(limit);
ShowNumbers(15, 4, 67);
ShowNumbers(4);

// Set Multiple Parameters

function ShowLine(length, symbol) {

    for (let i = 0; i < length; ++i) {
        
        document.write(`<span>${symbol}</span>`);
    }
    document.write(`<br>`);
}

ShowLine(7, '@');
ShowLine(33, '*');

function ShowRandomValue(min, max) {
    console.log(Math.round(Math.random() * (max - min) + min));
}

ShowRandomValue(1, 10);
ShowRandomValue(50, 60);
ShowRandomValue(0, 1);