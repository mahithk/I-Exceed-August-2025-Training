const student = {
    name: "Rahul",
    age: 21,
    course: "Computer Science",
    grades: [85, 92, 78, 90],
    getDetails: function() {
        return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
    },
    getAverage: function() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    },
    updateAge: function(newAge) {
        this.age = newAge;
    },
    addGrade: function(grade) {
        this.grades.push(grade);
    },
    highestGrade: function() {
        return Math.max(...this.grades);
    }
};

console.log(student.getDetails());
console.log("Average Grade:", student.getAverage());
student.updateAge(22);
student.addGrade(95);
console.log("Updated Details:", student.getDetails());
console.log("Highest Grade:", student.highestGrade());
