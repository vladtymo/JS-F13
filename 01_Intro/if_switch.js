// -=-=-=-=-=-=- if condition -=-=-=-=-=-=-

//count = +prompt("Enter an amount of products (max 25):");

// if (count < 0) { 
//     // if expression equals true
//     console.warn("Invalid value!");
// }
// if (count > 25) {
//     console.warn("Invalid value!");
// }

// Logical and: &&
// Logical or: ||

// if (count >= 0 && count <= 25) {
//     console.log("Good!");
// }

// color = prompt("Enter grayscale color:");

// if (color == "White" || color == "Black") {
//     console.log("Great color!");
// }
// else {
//     console.log("Bad Color!");
// }

// if (color != "White" && color != "Black") {
//    console.log("Bad Color!");
// }

// -=-=-=-=-=-=- if else if -=-=-=-=-=-=-

//let mark = +prompt("Enter a mark (1-5):");

// if (mark == 5) {
//     console.log("Perfect!");
// }
// else {
//     if (mark == 4) {
//         console.log("Good!");
//     }
//     else {
//         if (mark == 3) {
//             console.log("Normal!");
//         }
//         else {
//             if (mark == 2) {
//                 console.log("Bad!");
//             }
//             else {
//                 if (mark == 1) {
//                     console.log("Very Bad!");
//                 }
//                 else {
//                     console.log("Invalid mark!");
//                 }
//             }
//         }
//     }
// }
// if (mark == 5) {
//     console.log("Perfect!");
// }
// else if (mark == 4) {
//     console.log("Good!");
// }
// else if (mark == 3) {
//     console.log("Normal!");
// }
// else if (mark == 2) {
//     console.log("Bad!");
// }
// else if (mark == 1) {
//     console.log("Very Bad!");
// }
// else 
//     console.log("Invalid mark!");

// // -=-=-=-=-=-=- switch -=-=-=-=-=-=-

// switch (mark) {
//     case 1: console.log("Very Bad!");
//     break; // вихід з блоку switch
//     case 2: console.log("Bad!");    
//     break;
//     case 3: console.log("Normal!"); 
//     break;
//     case 4: console.log("Good!");
//     break;
//     case 5: console.log("Perfect!");
//     break;
//     default: 
//         console.log("Invalid mark!");
//         break;
// }

// a = 5, b = 10;
// operation = prompt("Operation:");

// if (operation == "+") {
//     alert(a + b);
// }
// switch (operation) {
//     case "+":
//         alert(a + b);
//         break;
//     case "-":
//         alert(a - b);
//         break;
//     default:
//         break;
// }

let month = +prompt("Enter a month:");

switch (month) {
    case 6: case 7: case 8:
        console.log("Summer");
        break;

    case 12: case 1: case 2: 
        console.log("Winter");
        break;

    // autumn, spring...

    default:
        console.log("Invalid month!");
        break;
}