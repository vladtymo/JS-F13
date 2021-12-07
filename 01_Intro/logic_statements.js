let num = 10;

if (num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");

// -=-=-=-=- тернарний оператор: (condition) ? true value : false value;
// дозволяє повернути значення взалежності від умови
console.log((num % 2 == 0) ? "Even" : "Odd");

// -=-=-=-=- Working with Date

const apr = 4;
const jun = 6;
const sep = 9;
const nov = 11;

// введена дата
let year = 2024, month = 2, day = 40;

// Обрахування наступної дати:

// якщо місяць ще не завершений, тоді збільшуємо число дня
if (day <= 27) {
    //day = day + 1;
    //day += 1;
    ++day; // increment
    //--day; // decrement
}
else {
    // якщо ні, тоді визначаємо к-сть дній в введеному місяці

    // змінна для збереження к-сті днів
    let daysInCurrentMonth; 
    // місяці в яких 30 днів
    if (month == nov || month == sep || month == jun || month == apr) {
        daysInCurrentMonth = 30;
    }
    // лютий як виключення
    else if (month == 2) {
        daysInCurrentMonth = (year % 4 == 0) ? 29 : 28;
        // if (year % 4 == 0)
        //     daysInCurrentMonth = 29;
        // else 
        //     daysInCurrentMonth = 28;
    }
    // залишаються ті, в яких 31
    else {
        daysInCurrentMonth = 31;
    }
    
    // якщо кінець місяці
    if (day == daysInCurrentMonth) {
        day = 1; // повертаємося на початкове число

        // якщо кінцевий місяць
        if (month == 12) {
            ++year;     // на наступний рік
            month = 1;  // на початок місяця
        }
        else {
            ++month;    // якщо місяць не кінцевий, тоді переходимо на наступний
        }
    }
    else if (day < daysInCurrentMonth) ++day; // якщо не кінець місяця, тоді збільшуємо день
}

alert(`Next date: ${day}/${month}/${year}`);

// теж саме, але використовуючи обʼєкт Date
let someDate = new Date(2021, 11, 31);
someDate.setDate(someDate.getDate() + 1);
console.log(someDate);

// Перевірка числа на паліндром

let number = 751232157;

// отримуємо останню цифру числа
let digit1 = number % 10;   // 1

// відкидаємо останню цифру від числа
number -= digit1;   // 12320
number /= 10;       // 1232

// повторюємо ту ж саму дію...
let digit2 = number % 10;  // 2

number -= digit2;   // 1230
number /= 10;       // 123

// і так для кожної цифри...

console.log(`${digit1}-${digit2}...`);

// теж саме, але використовуючи вбудовані функції

let number2 = 19591;
let reversed = number2.toString().split("").reverse().join("");

if (number2 == reversed)
    console.log("Palindrome");
else 
    console.log("Not a Palindrome");

// -=-=-=-=-=- named constants

const UP = 1, DOWN = 2, LEFT = 3, RIGHT = 4;

let direction = LEFT; // 1 - UP 2 - DOWN 3 - LEFT 4 - RIGHT

if (direction == LEFT) console.log("Moving left...");

console.log("Reverse direction: ");

switch (direction) {
    case UP:
        console.log("down");
        break;
    case DOWN:
        console.log("up");
        break;
    case RIGHT:
        console.log("left");
        break;
    case LEFT:
        console.log("right");
        break;
}

// Ctrl+K+F - format selected code