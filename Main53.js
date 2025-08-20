let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';

console.log(`Your score of ${score} is a grade of ${grade}.`);

let age = 15;
let status = age >= 18 ? 'Adult' :
             age >= 13 ? 'Teenager' : 'Child';

console.log(`An individual of ${age} years is a ${status}.`);
