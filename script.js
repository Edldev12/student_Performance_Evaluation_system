const name = "Edlawit Tsegaye";
const age = 20;
const course = "java script";
const score = 98;
const attendance = 90;

function displayStudentInfo (name, age, course, score, attendance){
  return `
  student Information
  -------------------
  Name: ${name}
  Age: ${age}
  Course: ${course}
  Score: ${score}
  Attendance: ${attendance}%
  `;
}
//======================================================
const StudentInfo = displayStudentInfo(name, age, course, score, attendance);
console.log(StudentInfo);
document.getElementById("studentName").textContent = name;
document.getElementById("studentAge").textContent = age;
document.getElementById("studentCourse").textContent = course;
document.getElementById("studentScore").textContent = score;
document.getElementById("studentAttendance").textContent = attendance;

//====================================================
const calculateGrade =(score) => {
  if (score >= 90){
    return "A";
  }
  else if (score >=80){
    return "B";
  }
  else if (score >=70){
    return "C";
  }
  else if (score >=60){
    return "D";
  }
  else{
    return "F"
  }
};
const grade = calculateGrade(score);
console.log("Grade:", grade);
document.getElementById("grade").textContent = grade;

//===========================================================
const getStudentStatus = (studentScore) => {
  if (studentScore >= 90){
    return "Excellent Performance";
  }
  else if (studentscore >= 60){
    return "Passed";
  }
  else{
    return "Failed";
  }
};

const status = getStudentStatus(score);

console.log("Performance Status:", status);

document.getElementById("status").textContent = status;

//===============================
const chakeEiligibility =(studentScore, studentAttendance) => {
  return studentScore >= 50 && studentAttendance >= 75 ? "Eligible" : "Not Eligable";
};

const eligabil = chakeEiligibility(score, attendance);
console.log("Exam Eligibility:", eligabil);
document.getElementById("eligibility").textContent = eligabil;

//===========================================================================

// remove extra spaces
const Name = name.trim();
// change state in to upper case
const clearName = Name.toUpperCase();
//chake if it include on upper case
const isJavascriptStudent =course.toUpperCase().includes("JAVASCRIPT");
// use ternary operator to know result
const result = score >= 60 ? "PASS" : "FAIL";


console.log("Cleaned Name:", clearName);
console.log("JavaScript Student:", isJavascriptStudent);
console.log("Student Result:", result);
document.getElementById("result").textContent = result;

//================================================================


// Global Scope
const academyName = "Nexus Academy";

function demonstrateScope() {

    // Function Scope
    const studentMessage = "Student evaluation is in progress.";

    console.log(`${academyName}: ${studentMessage}`);

    // Loop creates Block Scope
    for (let i = 1; i <= 3; i++) {

        // Block Scope
        const stepMessage = `Processing evaluation step ${i}...`;

        console.log(stepMessage);
        const step = document.createElement("p");
        step.textContent = stepMessage;
        evaluationSteps.appendChild(step);
    }
}

demonstrateScope();

//===========================================================