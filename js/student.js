class Student {
  //properties

  constructor(studentName) {
    this.studentName = studentName;
  }

  toString() {
    return "My name is: " + this.studentName;
  }
}

class Centennial extends Student {
  constructor(studentName, program) {
    super(studentName);
    this.program = program;
  }
  toString() {
    return (
      "My name is: " + this.studentName + "And program is: " + this.program
    );
  }
}

let firstStudent = new Student("Jorge");
console.log(firstStudent.toString());

let centennialStudent = new Centennial("Jose", "Developer");
console.log(centennialStudent.toString());
