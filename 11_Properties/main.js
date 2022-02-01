// set properties
let user = {};

user.name = "Vasya";    // create of replace the 'name' property of user
user.email = "super@gmail.com";
console.log(`Properties: Name=${user.name} Email=${user.email}`);

// remove properties
delete user.email;
console.log(`Properties: Name=${user.name} Email=${user.email}`);

// create rectangle object from keyboard
function createRectangle() {
    let rectange = {};

    rectange.width = +prompt("Enter rectangle width:");
    rectange.heigth = +prompt("Enter rectangle heigth:");
    rectange.color = prompt("Enter rectangle color:");

    return rectange;
}
function showRectangle(rect) {
    document.write(`<div>${rect.width}x${rect.heigth}cm ${rect.color}</div>`);
}

const rect1 = createRectangle();
const rect2 = createRectangle();
const rect3 = createRectangle();

showRectangle(rect1);
showRectangle(rect2);
showRectangle(rect3);
