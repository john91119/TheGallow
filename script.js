let word;
let chr = " _";
let maskWord = '';
let winnerMessage = 0;

function PickTheWord() {
    let words = ["masinarie", "eucalipt", "programare", "calculator", "programe", "codare", "minge"];
    word = words[Math.floor(Math.random() * words.length)];
}

function StartGame() {
    PickTheWord();
    let upDateLife = document.getElementById("number");
    upDateLife.textContent = 7;
    let maskWord = GenerateMaskWord( chr);
    let randomWordDisplay = document.getElementById("randomWord");
    randomWordDisplay.textContent = maskWord;
    let message = document.getElementById("Correct/Incorrect");
    message.textContent = "";
}


function GenerateMaskWord(chr) {
    let maskWord = '';
    for (let i = 0; i < word.length; ++i) {
        maskWord += chr;
    }
    return maskWord;
}

function MaskCharacters( maskWord, letter) {
    let updatedMaskWord = '';
    for (let i = 0; i < word.length; ++i) {
        if (word[i] === letter) {
            updatedMaskWord += letter;
        } else {
            updatedMaskWord += maskWord[i];
        }
    }
    return updatedMaskWord;
}

function CheckLetter() {
    let inputElement = document.getElementById("letter");
    let inputValue = inputElement.value.toLowerCase();
    let randomWordDisplay = document.getElementById("randomWord");
    let maskWord = randomWordDisplay.textContent;
    let number = parseInt(document.getElementById("number").textContent);
    let message = document.getElementById("Correct/Incorrect")
    if (!word) {
        StartGame();
    }
    if (winnerMessage == word.length - 1) {
        if (word.includes(inputValue) && number > 0) {
            maskWord = MaskCharacters( maskWord, inputValue);
            randomWordDisplay.textContent = maskWord;
        }
        message.textContent = "Winner!! Congruatulation!!"
    } else {
        if (word.includes(inputValue) && number > 0) {
            maskWord = MaskCharacters( maskWord, inputValue);
            randomWordDisplay.textContent = maskWord;
            winnerMessage += 1;
        } else if (!word.includes(inputValue) && number > 1){
                number = decrease(number);
                document.getElementById("number").textContent = number;
        } else {
            number = decrease(number);
            document.getElementById("number").textContent = number;
            message.textContent = "You Lose!";
        }
    }
    inputElement.value = "";
}

function decrease(number){
    if (number > 0) {
        number -= 1;
    }
    return number;
}
