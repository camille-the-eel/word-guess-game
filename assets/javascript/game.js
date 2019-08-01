//BASE VARIABLES
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
var remainingGuesses = 15;
var userGuessed = [];
var lettersGuessed = [];
var wordSuccess = false;

//LINKING JS TO HTML CLASSES
var winsText = document.querySelector(".wins");
var lossesText = document.querySelector(".losses");
var remainingGuessesText = document.querySelector(".guesses");
var lettersGuessedText = document.querySelector(".letters-guessed");
var blankText = document.querySelector(".word-blanks");


//FUNCTIONS
//=============================================

//GAME SET
function gameSet () {
    
    //RESETS COMPUTER SELECTED WORD
    computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    answerSpaces = [];
    for (var i = 0; i < computerSelect.length; i++) {
        answerSpaces[i]="_";
    }
    remainingLetters = computerSelect.length;

    //RESETS BLANKS
    blankText.textContent = answerSpaces.join(" ");

    //RESETS GUESSES REMAINING & DISPLAY HTML
    remainingGuesses = 15;
    remainingGuessesText.textContent = remainingGuesses;

    //RESETS THE USER GUESSED LETTERS
    userGuessed = [];
    lettersGuessed = [];
    lettersGuessedText.textContent = lettersGuessed;

    //RESETS CORRECT GUESS INDICATOR
    wordSuccess = false;
}

//RUNS WHENEVER PLAYER PRESSES A KEY
document.onkeyup = function(event) {

    //RESETS CORRECT GUESS INDICATOR
    wordSuccess = false;

    //DETERMINES WHICH KEY WAS PRESSED
    var userGuess = event.key;
    console.log(userGuess);

    //IF/ELSE STATEMENT TO ONLY ALLOW LETTERS AS GUESSES
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
        
        //DETERMINES IF USER HAS ALREADY MADE CURRENT GUESS
        let g = userGuessed.indexOf(userGuess);
        if (g === -1) {
            //IF NOT: ADD TO ARRAY OF GUESSES
            userGuessed.push(userGuess);
            lettersGuessed.push(" " + userGuess);

            remainingGuesses--;
            remainingGuessesText.textContent = remainingGuesses;

            wordCheck(userGuess);
            console.log("SUCCESS", wordSuccess);
        } else {
            alert("...you've already guessed that. Try a different letter.");
        }

        //CHECKING FOR WIN/LOSS
        setTimeout(checkOutcome, 300)

    }
    else {
        alert("Press a letter, smartass.")
    }
}

//CHECKING EACH GUESS
function wordCheck(userGuess) {

    //FOR LOOP PLUS IF/ELSE TO COMPARE LETTER GUESSES WITH THE INDEX OF EACH CHARACTER IN THE COMPUTER SELECTED 
    
    //THIS CHECKS EVERY INDEX, SO THE IF/ELSE RUNS FOR EACH BLANK SPACE. THEREFORE THE ELSE WILL FIRE EVERY GUESS 
    //(AS THERE IS NO WORD THAT HAS ONE LETTER AS EVERY BLANK)--ENSURING THE CURRENT userGuess(LETTER) IS ADDED TO THE GUESSED ARRAY
    for (var j =0; j < computerSelect.length; j++) {
        if (computerSelect[j] === userGuess) {
            answerSpaces[j] = userGuess;
            console.log(answerSpaces.join(" "));
            blankText.textContent = answerSpaces.join(" ");
            wordSuccess = true;
            remainingLetters--;
        }
        else {
            lettersGuessedText.textContent = lettersGuessed;
        }
    }

}

//CHECKING FOR WIN OR LOSS
function checkOutcome () {

    if (wordSuccess === true && remainingLetters === 0) {
        alert("You Win!");
        wins++;
        winsText.textContent = wins;
        gameSet();
    } else if (remainingGuesses === 0) {
        alert("You Lose");
        losses++;
        lossesText.textContent = losses;
        gameSet();
    }
};

//SETS THE GAME ON PAGE LOAD
gameSet();
