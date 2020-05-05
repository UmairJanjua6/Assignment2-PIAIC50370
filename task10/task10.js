// Password validation

var correctPassword = "correctPassword";
checkLabel:

while(true) {
    var userPassword = prompt("Enter your Password");

    if(userPassword == "" || userPassword == null) {
        alert("Please Enter Password");
        continue checkLabel;
    }

    if(userPassword == correctPassword) {
        alert("Correct! The password you entered matches the original password");
        break;
    }
        else if(userPassword != correctPassword){
            alert("Incorrect password");
            break;
        }
}