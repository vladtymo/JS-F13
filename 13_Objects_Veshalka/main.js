const words = [
    'Power', 'Fuel', 'Noise', 
    'Ball', 'Phone', 'Building',
    'School', 'Academy', 'Motobike',
    'Road', 'Train', 'House'
];

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function replaceChar(str, char, index) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

const wordSpan = document.getElementById('generated-word');
const realWordSpan = document.getElementById('real-word');
const submitBtn = document.getElementById('submit');
const textInput = document.getElementById('text');

// --on-

// game word
let game = {
    // properties
    generatedWord: "",  // згенероване слово
    wordMask: "",       // маска слова
    // methods
    generate() {
        let index = getRandomValue(0, words.length);
        this.generatedWord = words[index];
    },
    createMask() {
        this.wordMask = "";
        for (let i = 0; i < this.generatedWord.length; i++) {
            this.wordMask += '?';
        }
    },
    showWord() {
        realWordSpan.innerHTML = this.generatedWord;
    },
    showMask() {
        wordSpan.innerHTML = this.wordMask;
    },
    checkLetter(letter) {
        for (let i = 0; i < this.generatedWord.length; i++) {
            if (this.generatedWord[i].toLowerCase() == letter.toLowerCase()) {
                //this.wordMask[i] = letter; // does't work with strings
                this.wordMask = replaceChar(this.wordMask, letter, i);
            }
        }
    }
}

game.generate();
game.createMask();
game.showMask();
//game.showWord();

submitBtn.onclick = () => {
    game.checkLetter(textInput.value);
    game.showMask();
}