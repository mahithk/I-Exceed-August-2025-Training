const student = {
    name: "Aarav",
    age: 20,
    marks: { math: 85, science: 90, english: 78 },
    getAverage: function () {
        let total = this.marks.math + this.marks.science + this.marks.english;
        return total / 3;
    },
    updateMarks: function (subject, score) {
        this.marks[subject] = score;
    },
    displayInfo: function () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Marks:`, this.marks);
        console.log(`Average: ${this.getAverage()}`);
    }
};

student.displayInfo();
student.updateMarks("math", 95);
console.log("After updating:");
student.displayInfo();
