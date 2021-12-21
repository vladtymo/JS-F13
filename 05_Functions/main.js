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
// ShowUserName();
// ShowUserName();
// ShowUserName();

// Set Function Parameter
function ShowNumbers(max) {

    document.write(`Number [1...${max}]:`);
    for (let i = 1; i <= max; ++i) {
        
        document.write(`<span>${i}, </span>`);
    }
    document.write(`<br>`);
}

let limit = 10 * 2;

// ShowNumbers(limit);
// ShowNumbers(15, 4, 67);
// ShowNumbers(4);

// Set Multiple Parameters

function ShowLine(length, symbol = '#') {

    for (let i = 0; i < length; ++i) {
        
        document.write(`<span>${symbol}</span>`);
    }
    document.write(`<br>`);
}

ShowLine(7); // symbol = default
ShowLine(33, '*');

function ShowRandomValue(min, max) {
    console.log(Math.round(Math.random() * (max - min) + min));
}

// ShowRandomValue(1, 10);
// ShowRandomValue(50, 60);
// ShowRandomValue(0, 1);

// -=-=-=-=-=-=- Advanced -=-=-=-=-=-=-
// Anonymous Function

(function (word) {
    console.log("Your word is ", word);
})("Apple");

// Function Variables

// let showSumma = function (a, b) {
//     console.log(`${a} + ${b} = ${a + b}`);
// }

// Arrow Function

let showSumma = (a, b) => console.log(`${a} + ${b} = ${a + b}`);

// ShowSumma(4, 7);
// ShowSumma(123, 34);

const container = document.getElementById("block-container");

function addBlock(size, color = "Black") {

    let block = document.createElement("div");

    block.setAttribute('class', 'block');

    block.style.backgroundColor = color;
    block.style.width = size + "px";
    block.style.height = size + "px";

    container.appendChild(block);
    //container.innerHTML += `<div style='width: ${size}px; height: ${size}px; background: ${color};' class='block'></div>`;
}

addBlock(50);
addBlock(120);
addBlock(120, "Green");
addBlock(100, "Blue");