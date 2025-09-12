let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 90 }
];
let topStudents = students.filter(s => s.grade > 80).map(s => s.name);
console.log("Top Students:", topStudents);
