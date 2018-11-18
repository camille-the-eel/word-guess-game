
//VARIABLES
//===========================================

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

//VARIABLES FOR LINKING JS TO HTML CLASSES
var winsText = document.querySelector(".wins");
var lossesText = document.querySelector(".losses");
var guessRemainingText = document.querySelector(".guesses");
var lettersGuessed = document.querySelector(".letters-guessed");
var userGuessed = [""];
var blankText = document.querySelector(".word-blanks");

//FUNCTIONS
//=============================================

//GAME RESET
    function gameReset () {
        var computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        var answerSpaces = [];
        for (var i = 0; i < computerSelect.length; i++) {
            answerSpaces[i]="_";
        }
        remainingLetters = computerSelect.length;
        blankText.textContent = answerSpaces.join(" ");
    }


//GAME PLAY
//============================================

//CHOSES A RANDOM WORD FROM ARRAY "WORDCHOICES"
var computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];

//CREATES AN EMPTY ARRAY OF UNDERSCORES TO MATCH THE NUMBER OF LETTERS IN THE RANDOM WORD FROM "COMPUTERSELECT"
var answerSpaces = [];
for (var i = 0; i < computerSelect.length; i++) {
    answerSpaces[i]="_";
}

var remainingLetters = computerSelect.length;

// START UP COMPUTER SELECTION • SHOWs THE PLAYER THE ANSWER SPACES AS JOINED UP STRING
console.log(answerSpaces.join(" "));

gameReset ();

//=============================================

//RUNS WHENEVER PLAYER PRESSES A KEY
document.onkeyup = function(event) {

    //DETERMINES WHICH KEY WAS PRESSED
    var userGuess = event.key;
    console.log(userGuess);

        //WINS, LOSSES, GAMEPLAY ---WINS DOESN'T WORK?? WILL ALERT AT RANDOM TIMES • RESET ALSO DOESN'T WORK
        if (remainingGuesses === 0) {
            alert("You Lose");
            losses++;
            gameReset();
        } else if (remainingLetters === 0) {
            alert("You Win!");
            wins++;
            gameReset();
        } else {
            //IF/ELSE STATEMENT TO ONLY ALLOW LETTERS AS GUESSES
            if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {

                //FOR LOOP PLUS IF/ELSE TO COMPARE LETTER GUESSES WITH THE INDEX OF EACH CHARACTER IN THE COMPUTER SELECTED WORD
                for (var j =0; j < computerSelect.length; j++) {
                    if (computerSelect[j] === userGuess) {
                        answerSpaces[j] = userGuess;
                        remainingLetters--;
                        console.log(answerSpaces.join(" "));
                        blankText.textContent = answerSpaces.join(" ");
                    }
                    else if (computerSelect[j] !== userGuess) { 
                        lettersGuessed.textContent = ("Letters Guessed: " + userGuessed);
                    }
                }
                //FIX! MAKE IF/ELSE SO THE LETTERS DON'T REPEAT
                //ALSO WHY WON'T THE FIRST ONE SHOW UP?
                userGuessed.push(" " + userGuess);
                // guessRemaining.textContent("");
            }
            else {
                alert("Press a letter, smartass.")
                }

        }
}
