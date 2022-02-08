//---------- Array Methods ----------

let books = [
    { 
        title: 'Nigthmare',
        pages: 750,
        rating: 4.2
    },
    {
        title: 'Taras Bulba',
        pages: 598,
        rating: 4.7
    },
    {
        title: 'Christmas',
        pages: 900,
        rating: 3.5
    },
    {
        title: 'Souls',
        pages: 1200,
        rating: 3.9
    },
    {
        title: 'JavaScript for beginners',
        pages: 470,
        rating: 4.9
    }
];

//---------- Sorting ----------
function compareBooksByTitle(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
}
// function compareBooksByRating(a, b) {
//     return a.rating - b.rating;
// }

// Arrow function
books.sort((a, b) => b.rating - a.rating);

// for (const book of books) {
//     console.log(book);
// }
console.log(books);

////////// Bubble Sort
function bubbleSort(arr) {

    //Outer pass
    for(let i = 0; i < arr.length; i++) {

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));

//---------- Working with Array ----------
let numbers = [ 5, 79, 34, 4, 33, 10, 33, 50, 48 ];

console.log("Element at index 3 = ", numbers[3]); // 4

//---------- indexOf ----------
console.log("Index of first 33 = ", numbers.indexOf(33)); // search from the beginning
console.log("Index of last 33 = ", numbers.lastIndexOf(33)); // from the end

// return -1 if element is not exists
if (numbers.indexOf(2) === -1) {
    console.warn("2 does not exists");
}

console.log(numbers.indexOf(33, 3)); // 4

//---------- fill ----------
numbers.fill(777, 5, 8); // fill elemets with 777 from index [5...8)

console.log("After fill: ", numbers);

//---------- find ----------
console.log("Even number: ", numbers.find((n, i) => n % 2 === 0 && i % 2 != 0));

//---------- forEach ----------
numbers.forEach((num, ind) => {
    console.log(`Element at index ${ind} = ${num}`);
})
// the same but with for
// for (let ind = 0; ind < numbers.length; ind++) {
//     console.log(`Element at index ${ind} = ${numbers[ind]}`);
// }

//---------- slice ----------
let copy = numbers.slice(2, 5); 
console.log("Slice from 2 to 5: ", copy);
console.log("Original after slice: ", numbers);

//---------- splice ----------
numbers.splice(2, 3); // remove 3 elements from 2 index
console.log("Original after splice: ", numbers);

//---------- reverse ----------
const reversed = [...numbers]; // copy of the numbers array
reversed.reverse();
console.log("Reversed: ", reversed);
console.log("Original: ", numbers);

//---------- map ----------
const mapped = numbers.map((n) => `${n}!!!`);
console.log("Mapped array: ", mapped);