//Take input color of road traffic signal from the user & show the message

var userInput = prompt("Enter color of traffic signal");

if(userInput === "Red" || userInput === "red") {
    alert("Must Stop!");
}
else if (userInput === "Yellow" || userInput === "yellow") {
    alert("Ready to move");
}
else if (userInput === "Green" || userInput === "green") {
    alert("Move now");
}
else {
    alert("Invalid color");
}