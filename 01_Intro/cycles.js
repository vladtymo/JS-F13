// -=-=-=-=-=-=-=- Cycles -=-=-=-=-=-=-=-

// -=-=-=-=- while - цикл з передумовою
/* 
while(condition) {  1
    // code...      2
}
*/

// let month = +prompt("Enter a month:"); // 33

// while(month < 1 || month > 12) {
//     console.log("Incorrect month!");
//     month = +prompt("Enter again: ");
// }

// console.log("Great!");

// -=-=-=-=- do while - цикл з післяумовою
// do {
//      code...           1
// } while (condition);   2

// let randomNumber;
// do {
//     randomNumber = Math.floor(Math.random() * 10);
//     console.log("Number:", randomNumber); // [0...10)
// } while(randomNumber != 7);

// let randomNumber = Math.floor(Math.random() * 10);
// console.log("Number:", randomNumber); // [0...10)

// while(randomNumber != 7) {
//     randomNumber = Math.floor(Math.random() * 10);
//     console.log("Number:", randomNumber); // [0...10)
// }

// let max = +prompt("How many iterations?");

// let count = 0; // initialization
// while(count < max) { // condition

//     // code...
//     console.log(`${count + 1}. Hello (while)!!!`);
//     ++count; // expression
// }
// console.log("================================");
// -=-=-=-=- for
/*
    for(initialization; condition; expression) {
        code...
    }
*/

// for(let count = 0; count < max; ++count) {
//     // code...
//     console.log(`${count + 1}. Hello (for)!!!`);
// }

/*
    #
    ##
    ###
    ####
    #####
*/

let answer = confirm("Do you want to print triangle?");

if (answer == true) {
    
    let heigth = +prompt("Enter heigth of the triagnle: ");

    document.write(`<h2>Triangle with heigth of ${heigth}</h2>`);

    // цикл який повторюється для кожного рядка
    for (let i = 1; i <= heigth; ++i) {
        
        let line = "";
        // цикл який додає певну к-сть символів
        for(let x = 1; x <= i; ++x) {
            //console.log(`${i} #`);
            line += "#";
        }
        //console.log(line);
        document.write(`<span>${line}</span><br>`);
    }
}
else console.log("See you later!");