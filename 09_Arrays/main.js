// Get Random Value
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// -=-=-=-=- Array it is an object that contains elements of different types -=-=-=-=-

// create an array
//let array = new Array([120, 2, 5]);
let array = [10, 12, 0, -5, 120, "hello", true, "bye"]; // array of elements

console.log("Array type", typeof(array));

console.log("Array: ", array);
console.log("Element at 3 index: ", array[3]);
console.log("Element type at 3 index", typeof(array[3]));

array.push(777);
array.pop();

array.unshift(111);
array.shift();

let copy = array.slice(2, array.length - 1);

console.log("Array: ", array);
console.log("Copy: ", copy);

// Calculate summ of the array
let numbers = [5, 0, 10, 22, 13];

let summ = 0;
//summ = numbers[0] + numbers[1]//...

//summ += numbers[1];
//summ += numbers[2];
//summ += numbers[3];...

for(let i = 0; i < numbers.length; ++i) {
    summ += numbers[i];
}
console.log("Summ of elements:", summ);

// Initialize the array with random values
let randomValues = [];

for(let i = 0; i < 10; ++i) {
    randomValues.push(getRandomValue(0, 100));
    //randomValues[i] = getRandomValue(0, 100);
}
console.log("Array with random value:", randomValues);

// Show all even numbers of the array
for(let i = 0; i < randomValues.length; ++i) {

    if (randomValues[i] % 2 == 0) 
        console.log(randomValues[i]);
}

// Get random element from the array
let cardTypes = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];

let type = cardTypes[getRandomValue(0, cardTypes.length)];
console.log("Random card type:", type);
