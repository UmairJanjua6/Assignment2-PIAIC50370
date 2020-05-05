// Program to check the state of number whether it is positive, negative or zero.

var userInput = prompt("Enter any number");

if(userInput < 0) {
    alert("You entered Negative number");
}
    else if(userInput == 0) {
        alert("You entered ZERO");
    }
        else {
            alert("You entered Positive number");
        }