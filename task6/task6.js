// Checks whether the given input is an even number or an odd number

var userInput = prompt("Enter any positive number");

if (userInput >= 0) {
    if(userInput % 2 == 0) {
        alert("Even number");
    }
    else {
        alert("Odd number");
    }
}
else {
    alert("Please enter POSITIVE number");
}