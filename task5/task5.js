//Guess game

var secretNumber = 5;
var userGuess = prompt("Guess number ranging between 1-10");

if(secretNumber == userGuess) {
    alert("Bingo! Correct answer");
}
else if (secretNumber == (userGuess - 1)) {
    alert("Close enough to the correct answer");
}
else {
    alert("try next time");
}