class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = [];
    }

    addMark(subject, score) {
        this.marks.push({ subject, score });
    }

    getAverage() {
        let total = 0;
        for (let mark of this.marks) {
            total += mark.score;
        }
        return total / this.marks.length;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
        console.log(`Average Marks: ${this.getAverage()}`);
    }
}

let student1 = new Student("Ananya", 20, "Computer Science");
student1.addMark("Math", 90);
student1.addMark("Physics", 85);
student1.addMark("Programming", 95);
student1.displayInfo();
