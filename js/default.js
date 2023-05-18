function add(a, b = 15) {
  return a + b;
}

console.log(add());
console.log(add(10, 30));

//rest example:

function myStudents(prof, ...students) {
  console.log("Professor name: " + prof);
  console.log("Number of students: " + students.length);
}

myStudents("Krunal", "Jose", "Jorge", "Laura", "Alejandro");

function getStudents(first, second, third) {
  console.log("Student #1 :" + first);
  console.log("Student #2 :" + second);
  console.log("Student #3 :" + third);
}

getStudents(...["Sergio", "Michael", "Natalia"]);
