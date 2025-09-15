class GradeCalculator {
    constructor() {
        this.students = [];
    }
    addStudent(name, marks) {
        try {
            if (!name || marks < 0 || marks > 100) throw new Error("Invalid student data");
            this.students.push({ name, marks });
            return "Student added: " + name;
        } catch (error) {
            return error.message;
        }
    }
    calculateGrades() {
        try {
            if (this.students.length === 0) throw new Error("No students available");
            return this.students.map(s => {
                let grade = s.marks >= 90 ? "A" : s.marks >= 75 ? "B" : s.marks >= 50 ? "C" : "F";
                return s.name + " scored " + s.marks + " and got grade " + grade;
            });
        } catch (error) {
            return error.message;
        }
    }
}
const calc = new GradeCalculator();
console.log(calc.addStudent("John", 85));
console.log(calc.addStudent("Lucy", -10));
console.log(calc.calculateGrades());
