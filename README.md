# Word-Guess-Game


* ~establish your themed array of words~
* ~have the computer chose a random word from the array~
* display the number of dashes corresponding to the number of letters in the random word chosen
  - As the user guesses the correct letters, reveal them: m a d o _  _ a

* Display the following on the page:

* ~Press any key to get started!~
* Wins: (# of times user guessed the word correctly).
  -display number of wins
  -once the word is complete, player wins if guesses => 0
  -save number of wins
* Loses: 
   -display number of loses
   -save number of loses
   -if guesses=0 and word is not complete, player loses

* display number of Guesses Remaining: (# of guesses remaining for the user)
  - set number of guessing you receive at beginning
  - take away one guess for every letter press
  - if guesses = 0 and word is not complete, you lose
  
* ~display letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).~

* ~Use key events to listen for the letters that your players will type~

* After the user wins/loses the game should automatically choose another word and make the user play it* 


TO DO Word Game:

Both win and lose don’t reset the guesses remaining or letters guessed

Will randomly alert “you win” when you have not won

First letter pressed doesn’t show up in “Letters guessed” but a comma does appear for it

Don’t want game to register or display repeat letters

Something completely wrong with the logic for winning and losing

Blank spaces are only visible once you get a letter correct

DONE
remainingGuessesText … can’t get it to display
Have not set wins or loses
Win and lose don’t register upon winning key pressed, registers on the next key —— this is because it’s within the on key up




Layout

If start up is all within one function, and gameplay in another, reset occurs when start up is called vs having a separate function to “clear”


