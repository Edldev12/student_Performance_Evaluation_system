const name = "Edlawit Tsegaye";
const age = 20;function displayStudentInfo (name, age, course, score, attendance){
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
const course = "javascript";
const score = 98;
const attendance = 90;

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

