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

