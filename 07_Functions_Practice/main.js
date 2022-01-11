function addBlock(color, width) {
    const container = document.querySelector('.container');

    //container.innerHTML += '<div class="block"></div>';

    const block = document.createElement('div');

    block.setAttribute('class', 'block');

    block.style.backgroundColor = color;
    block.style.width = width + 'px';

    container.appendChild(block);
}

// addBlock('red', 230);
// addBlock('green', 120);
// addBlock('red', 40);
// addBlock('cyan', 330);


// Get Random Value
function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const red = getRandomValue(0, 256);
    const green = getRandomValue(0, 256);
    const blue = getRandomValue(0, 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function addRandomBlock() {
    let width = getRandomValue(50, 500);
    let color = getRandomColor();

    addBlock(color, width);
}

function addRandomBlocks() {

    let count = getRandomValue(1, 50);
    
    for (let i = 0; i < count; i++) {
        addRandomBlock();
    }
}

addRandomBlocks();

function clearBlocks() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

// Get Button Elements
const btnGenerate = document.getElementById('generate-btn');
const btnClear = document.getElementById('clear-btn');
const btnAdd = document.getElementById('add-btn');

// Set Event Handlers
btnGenerate.onclick = () => {
    addRandomBlocks();
}
btnClear.onclick = () => {
    clearBlocks();
}
btnAdd.onclick = () => {
    addRandomBlock();
}