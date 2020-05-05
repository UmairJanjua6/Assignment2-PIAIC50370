// Time conversion

var time = prompt("Enter time");

if(time == "0000") {
    alert("Time is 12 AM");
}
    else if (time >= 0100 && time <1200) {
         alert("Good morning!");
    }
        else if (time >= 1200 && time < 1700) {
            alert("Good Afternoon!");
        }
            else if (time >= 1700 && 2100) {
                alert("Good evening!");
            }
                else if (time >= 2100 && time <=2359) {
                    alert("Good night!");
                }