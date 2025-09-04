function Student(name, roll, course) {
    this.name = name
    this.roll = roll
    this.course = course
    this.display = function() {
        return `Name: ${this.name}, Roll: ${this.roll}, Course: ${this.course}`
    }
}

let student1 = new Student("Mahith", 101, "CSE")
let student2 = new Student("Ram", 102, "ECE")
let student3 = new Student("Ravi", 103, "MECH")

let students = [student1, student2, student3]

students.forEach(s => console.log(s.display()))

let courseList = students.map(s => s.course).join(", ")
console.log("Courses:", courseList)

let upperCaseCourses = courseList.toUpperCase()
console.log("Upper Case Courses:", upperCaseCourses)

let courseCount = courseList.split(",").length
console.log("Total Courses:", courseCount)

try {
    if(courseCount < 3) throw new Error("Not enough courses")
    console.log("All courses added successfully")
} catch(err) {
    console.log("Error:", err.message)
}
