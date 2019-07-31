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
var userGuessed = [];

//VARIABLES FOR LINKING JS TO HTML CLASSES
var winsText = document.querySelector(".wins");
var lossesText = document.querySelector(".losses");
var remainingGuessesText = document.querySelectorAll(".guesses");
var lettersGuessed = document.querySelectorAll(".letters-guessed");
var blankText = document.querySelector(".word-blanks");

//FUNCTIONS
//=============================================

//GAME SET
function gameSet () {
    
    //CHOSES A RANDOM WORD FROM ARRAY "WORDCHOICES"
    computerSelect = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //CREATES AN EMPTY ARRAY OF UNDERSCORES TO MATCH THE NUMBER OF LETTERS IN THE RANDOM WORD FROM "COMPUTERSELECT"
    answerSpaces = [];
    for (var i = 0; i < computerSelect.length; i++) {
        answerSpaces[i]="_";
    }
    remainingLetters = computerSelect.length;
    

    //SHOWS THE PLAYER THE ANSWER SPACES AS JOINED UP STRING
    blankText.textContent = answerSpaces.join(" ");

    //RESETS GUESSES REMAINING & DISPLAY HTML
    remainingGuesses = 15;
    remainingGuessesText.textContent = remainingGuesses;

    //RESETS THE USER GUESSED LETTERS
    userGuessed = [];
    lettersGuessed.textContent = userGuessed;

    gamePlay();
}


//GAME PLAY
//============================================



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

//on each key pressed : 
// - check that it's a letter
// - check if it's in userGuessed 
    // - if yes: alert "pick new letter"
    // if no: continue
        // -add letter to userGuessed
        // - check if it is in the word
            // - if yes: fill in the blank --subtract from remainingGuesses
                    // - check if the word is completed: if yes WIN
                    // if no: remainingGuesses=0 LOSE
                    // else: continue
            // - if no: subtract from remainingGuesses
                    // if remainingGuesses=0 LOSE
                    // else: continue

function gamePlay() {

//RUNS WHENEVER PLAYER PRESSES A KEY
document.onkeyup = function(event) {

        //DETERMINES WHICH KEY WAS PRESSED
        var userGuess = event.key + " ";
        console.log(userGuess);

            //IF/ELSE STATEMENT TO ONLY ALLOW LETTERS AS GUESSES
            if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
                    
                userGuessed.push(userGuess);

                remainingGuesses--;
                remainingGuessesText.textContent = remainingGuesses;

                //FOR LOOP PLUS IF/ELSE TO COMPARE LETTER GUESSES WITH THE INDEX OF EACH CHARACTER IN THE COMPUTER SELECTED WORD
                for (var j =0; j < computerSelect.length; j++) {
                    if (computerSelect[j] === userGuess) {
                        answerSpaces[j] = userGuess;
                        remainingLetters--;
                        console.log(answerSpaces.join(" "));
                        blankText.textContent = answerSpaces.join(" ");
                    }
                    else if (computerSelect[j] !== userGuess) { 
                        lettersGuessed.textContent = userGuessed;
                    }
                }

                //FIX! MAKE IF/ELSE SO THE LETTERS DON'T REPEAT
                //ALSO WHY WON'T THE FIRST ONE SHOW UP?
                userGuessed.push(" " + userGuess);
            }
            else {
                alert("Press a letter, smartass.")
                }

        }

    // gameSet();
};


// //INSIDE ON KEY UP
// //=============================================

// //RUNS WHENEVER PLAYER PRESSES A KEY
// document.onkeyup = function(event) {

//     //DETERMINES WHICH KEY WAS PRESSED
//     var userGuess = event.key;
//     console.log(userGuess);

//             //IF/ELSE STATEMENT TO ONLY ALLOW LETTERS AS GUESSES
//             if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {

//                 remainingGuesses--;
//                 remainingGuessesText.textContent = remainingGuesses;

//                 //FOR LOOP PLUS IF/ELSE TO COMPARE LETTER GUESSES WITH THE INDEX OF EACH CHARACTER IN THE COMPUTER SELECTED WORD
//                 for (var j =0; j < computerSelect.length; j++) {
//                     if (computerSelect[j] === userGuess) {
//                         answerSpaces[j] = userGuess;
//                         remainingLetters--;
//                         console.log(answerSpaces.join(" "));
//                         blankText.textContent = answerSpaces.join(" ");
//                     }
//                     else if (computerSelect[j] !== userGuess) { 
//                         lettersGuessed.textContent = userGuessed;
//                     }
//                 }

//                 //FIX! MAKE IF/ELSE SO THE LETTERS DON'T REPEAT
//                 //ALSO WHY WON'T THE FIRST ONE SHOW UP?
//                 userGuessed.push(" " + userGuess);
//             }
//             else {
//                 alert("Press a letter, smartass.")
//                 }

//         }

// gameSet();

