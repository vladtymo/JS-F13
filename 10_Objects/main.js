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

// testing
// showDoor(door);
// switchDoor(door);
// showDoor(door);
// switchDoor(door);
// showDoor(door);

// get all properties of the object
// for (const key in door) {
//     console.log(`Key: ${key}, Value: ${door[key]}`);
// }

// Inner Objects

let pc = {
    year: 2018,
    model: "Dell Super II",
    processor: {
        model: "Intel Core i5",
        freq: 2.5,
        cores: 4,
        threads: 8
    },
    memory: {
        type: "DDR4",
        capacity: 8,
        freq: 3200
    },
    ssd: {
        model: "Samsung Evo",
        capacity: 512
    }
};

function showPC(pc) {
    document.write(`\tPC: ${pc.model} ${pc.year}<br>`);
    document.write(`Processor: ${pc.processor.model}<br>`);
    document.write(`Memory: ${pc.memory.type}<br>`);
    document.write(`SSD: ${pc.ssd.model}<br>`);
}
function turboBoost(processor) {
    console.log(`Boost the processor ${processor.model} from ${processor.freq}Ghz...`);
    processor.freq += 0.33;
    console.log(`Final frequency ${processor.freq}Ghz`);
}

// testing
showPC(pc);
turboBoost(pc.processor);

let order = {
    number: 233233,
    date: new Date(2022, 1, 25),
    price: 4500,
    client: {
        firstName: "Sasha",
        lastName: "Programmer",
        phoneNumber: "+380987654321",
        address: {
            country: "Ukraine",
            city: "Rivne",
            street: "Soborna",
            building: "5A"
        }
    }
};

console.log("Street:", order.client.address.street);

function deliverOrder(address) {
    console.log(`Shipping the order to ${address.city} ${address.country}, ${address.street} ${address.building}`);
}

deliverOrder(order.client.address);

// Object with Arrays
let bestMovie = {
    title: "Fast & Furious 1",
    year: 2001,
    genres: ["Action", "Crime", "Triller"],
    rating: 5,
    actors: [
        {
            fullName: "Vin Diesel",
            nickname: "Dominic Toretto"
        },
        {
            fullName: "Paul Walker",
            nickname: "Brian O'Conner"
        },
        {
            fullName: "Michelle Rodriguez",
            nickname: "Letty Ortiz"
        },
        {
            fullName: "Jordana Brewster",
            nickname: "Mia Toretto"
        }
    ]
}
let worseMovie = {
    title: "The Matrix Resurrections",
    year: 2021,
    genres: ["Sci-fi", "Action"],
    rating: 3,
    actors: [
        {
            fullName: "Keanu Reeves",
            nickname: "Neo"
        },
        {
            fullName: "Laurence Fishburne",
            nickname: "Morpheus"
        },
        {
            fullName: "Jessica Henwick",
            nickname: "Bugs"
        }
    ]
}

function showMovieMainInfo(movie) {
    console.log(`Movie ${movie.title} ${movie.year}\nGenres: ${movie.genres}`);
}
function showActorRealNames(movie) {
    for (const m of movie.actors) {
        console.log("Full Name: ", m.fullName);
    }
}
function showActorNicknames(movie) {
    for (const m of movie.actors) {
        console.log("Nickname: ", m.nickname);
    }
}
function addGenreToMovie(genre, movie) {
    movie.genres.push(genre);
}

showMovieMainInfo(bestMovie);
addGenreToMovie("Drama", bestMovie);
showMovieMainInfo(bestMovie);

showActorRealNames(worseMovie);
showActorNicknames(worseMovie);
