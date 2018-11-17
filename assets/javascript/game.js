//and the game begins

//variables
var wordChoices = [
    "finestra",
    "revelio", 
    "impedimenta", 
    "obliviate", 
    "morsmordre", 
    "relashio", 
    "diffindo",
    "levicorpus",
    "riddikulus", 
    "incendio", 
    "aguamenti", 
    "dissendium", 
    "muffliato", 
    "legilimens", 
    "sectumsempra", 
    "confundo",  
    "ventus", 
    "nebulus", 
    "avenseguim"
];
var wins = 0;
var losses = 0;
var startingGuesses = 10;
var remainingGuesses = startingGuesses;

//variables to link html classes to js
var winsText = document.querySelector(".wins");
var lossesText = document.querySelector(".losses");
var guessRemainingText = document.querySelector(".guesses");
var lettersGuessed = document.querySelector(".letters-guessed");
var userGuessed = [""];
var blankText = document.querySelector(".word-blanks");

//FUNCTION
//game reset

    function gameReset () {
        var computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        for (var i = 0; i < computerSelect.length; i++) {
            answerSpaces[i]="_";
        }
        remainingLetters = computerSelect.length;
        blankText.textContent = answerSpaces.join(" ");
    }
//---------------------------



//choses a random word from array "wordChoices"
var computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];

//creates an empty array of underscores to match the number of letters in the random word from "computerSelect"
var answerSpaces = [];
for (var i = 0; i < computerSelect.length; i++) {
    answerSpaces[i]="_";
}

var remainingLetters = computerSelect.length;

gameReset();

// START UP COMPUTER SELECTION
//show the player the answerSpaces as joined up string
console.log(answerSpaces.join(" "));

//runs whenever player presses a key
document.onkeyup = function(event) {

//determines which key was pressed.
var userGuess = event.key;
console.log(userGuess);

//wins, losses, gameplay ---wins doesn't work?? will alert at random times Reset also doesn't work
if (remainingGuesses === 0) {
    alert("You Lose");
    losses++;
    gameReset();
} else if (remainingLetters === 0) {
    alert("You Win!");
    wins++;
    gameReset();
} else {
    //if/else statement to only allow letters as guesses
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {

        //for loop plus if/else to compare letter guesses with the index of each character in the computer Selected word
        for (var j =0; j < computerSelect.length; j++) {
            if (computerSelect[j] === userGuess) {
                answerSpaces[j] = userGuess;
                remainingLetters--;
                console.log(answerSpaces.join(" "));
                blankText.textContent = answerSpaces.join(" ");
            }
            else if (userGuess !== computerSelect[j]) { 
                lettersGuessed.textContent = ("Letters Guessed: " + userGuessed);
            }
        }
        //FIXX! make if/else so the letters don't repeat
        //also why won't the first one show up??
        userGuessed.push(" " + userGuess);
        // guessRemaining.textContent("");
    }
    else {
        alert("Press a letter, smartass.")
        }

    }
}

gameReset();
