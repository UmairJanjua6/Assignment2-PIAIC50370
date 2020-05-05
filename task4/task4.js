'use strict';
// Grading system 

//take input of 3 subjects
    var subject1 = prompt("Enter marks obtained in subject 1", "100");
    var subject2 = prompt("Enter marks obtained in subject 2", "100");
    var subject3 = prompt("Enter marks obtained in subject 3", "100");
    var marksObtained = parseInt(subject1) + parseInt(subject2) + parseInt(subject3);

//total marks
var totalMarks = prompt("Enter total marks", "300");

//calculate percentage
var percentage = ((marksObtained / totalMarks) * 100);

//calculate grade
var grade;
var remarks;
if(percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
    else if(percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }
        else if(percentage >= 60) {
            grade = "B";
            remarks = "You need to improve";
        }
            else {
                grade = "Fail";
                remarks = "Sorry";
            }

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + totalMarks);
document.write("<br>Marks Obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage);
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);