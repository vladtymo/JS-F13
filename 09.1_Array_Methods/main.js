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

function compareBooksByTitle(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
}
// function compareBooksByRating(a, b) {
//     return a.rating - b.rating;
// }

books.sort((a, b) => b.rating - a.rating);

for (const book of books) {
    console.log(book);
}