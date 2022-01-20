// Set parameters of the door

let width = 60;
let heigth = 210;
let isLock = false;
let color = 'Brown';

function badShowDoor(w, h, l, c) {
    document.write(`Width: ${w}cm<br>`);
    document.write(`Heigth: ${h}cm<br>`);
    // (condition) ? true : false
    document.write(`Locked: ${(l) ? "Yes" : "No"}<br>`);
    document.write(`Color: ${c}<br><hr>`);
}

badShowDoor(width, heigth, isLock, color);

// Objects

let door = {
    width: 60,
    heigth: 120,
    isLock: true,
    color: 'Grey'
};

console.log("Type of door:", typeof(door));

console.log("Width:", door.width);
console.log("Heigth:", door['heigth']);

function showDoor(d) {
    document.write(`Width: ${d.width}cm<br>`);
    document.write(`Heigth: ${d.heigth}cm<br>`);
    // (condition) ? true : false
    document.write(`Locked: ${(d.isLock) ? "Yes" : "No"}<br>`);
    document.write(`Color: ${d.color}<br><hr>`);
}
function switchDoor(door) {
    // if (door.isLock == true)
    //     door.isLock = false;
    // else
    //     door.isLock = true;
    
    //door.isLock = door.isLock ? false : true;

    door.isLock = !door.isLock;
}

showDoor(door);
switchDoor(door);
showDoor(door);
switchDoor(door);
showDoor(door);

// get all properties of the object
for (const key in door) {
    console.log(`Key: ${key}, Value: ${door[key]}`);
}