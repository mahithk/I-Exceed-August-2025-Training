const student = {
    status: "progress",
    scores: [88, 72, 95, 61, 80, 99]
};

Object.defineProperty(student, "Department", { value: "cse", writable: true });
student.Department = "it";

Object.defineProperty(student, "Lowest", {
    get() { return Math.min(...this.scores); }
});

Object.defineProperty(student, "Highest", {
    get() { return Math.max(...this.scores); }
});

Object.defineProperty(student, "Finish", {
    set(val) { if (val) this.status = "Completed"; }
});

console.log(student.Department);
console.log(student.Lowest);
console.log(student.Highest);
student.Finish = true;
console.log(student.status);
