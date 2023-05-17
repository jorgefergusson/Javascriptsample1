class Student {
  //properties

  constructor(studentName) {
    this.studentName = studentName;
  }

  toString() {
    return "My name is: " + this.studentName;
  }
}

let firstStudent = new Student("Jorge");
console.log(firstStudent.toString());