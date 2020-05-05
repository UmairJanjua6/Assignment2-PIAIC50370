// simple calculator

var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var operation = prompt("Enter +, -, *, /");
var result;

if(operation == "+") {
    result = Number(firstNumber) + Number(secondNumber);
    alert(result);
}
    else if(operation == "-") {
        result = Number(firstNumber) - Number(secondNumber);
        alert(result);
    }
        else if(operation == "*") {
            result = Number(firstNumber) * Number(secondNumber);
            alert(result);
        }
        else if(operation == "/") {
            result = Number(firstNumber) / Number(secondNumber);
            alert(result);
        }
            else {
                alert("Invalid input");
            }