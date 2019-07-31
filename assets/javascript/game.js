
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

//VARIABLES FOR LINKING JS TO HTML CLASSES
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
}


//GAME PLAY
//============================================

function gameOutcome () {

    if (remainingGuesses === 0) {
        alert("You Lose");
        losses++;
        lossesText.textContent = losses;
        gameSet();
    } else if (remainingLetters === -1 ) {
        alert("You Win!");
        wins++;
        winsText.textContent = wins;
        gameSet();
    }
};


//INSIDE ON KEY UP
//=============================================

//RUNS WHENEVER PLAYER PRESSES A KEY
document.onkeyup = function(event) {

    //DETERMINES WHICH KEY WAS PRESSED
    var userGuess = event.key;
    console.log(userGuess);

        //IF/ELSE STATEMENT TO ONLY ALLOW LETTERS AS GUESSES
        if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
            
            let g = userGuessed.indexOf(userGuess);
        
            if (g === -1) {
                userGuessed.push(userGuess);
                lettersGuessed.push(" " + userGuess);

                remainingGuesses--;
                remainingGuessesText.textContent = remainingGuesses;

                //FOR LOOP PLUS IF/ELSE TO COMPARE LETTER GUESSES WITH THE INDEX OF EACH CHARACTER IN THE COMPUTER SELECTED WORD
                for (var j =0; j < computerSelect.length; j++) {
                    if (computerSelect[j] === userGuess) {
                        answerSpaces[j] = userGuess;
                        remainingLetters--;
                        console.log(answerSpaces.join(" "));
                        blankText.textContent = answerSpaces.join(" ");
                        console.log("RIGHT");
                    }
                    else if (computerSelect[j] !== userGuess) { 
                        lettersGuessedText.textContent = lettersGuessed;
                        console.log("WRONG");
                    }
                }
            } else {
                console.log("...you've already guessed that. Try a different letter.");
            }

            gameOutcome();
        }
        else {
            alert("Press a letter, smartass.")
        }
}

gameSet();
