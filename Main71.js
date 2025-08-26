let trainee = {
    name: "Rakesh",
    yearOfBirth: 2003,
    showDetails: function() {
        return "Trainee: " + this.name + ", Born in: " + this.yearOfBirth;
    }
};

let trainer = {
    name: "Sivam",
    yearOfBirth: 1980,
    displayName: function() {
        return "Trainer: " + this.name;
    },
    calculateMyAge: function(dob) {
        this.yearOfBirth = dob;
        return new Date().getFullYear() - this.yearOfBirth;
    }
};

console.log(trainer.displayName());
console.log(trainer.displayName.bind(trainee)());
console.log("Trainer Age: " + trainer.calculateMyAge(1980));
let traineeAge = trainer.calculateMyAge.bind(trainee);
console.log("Trainee Age: " + traineeAge(2003));
console.log(trainee.showDetails());
console.log(trainer.displayName());
console.log("Updated Trainee Age: " + traineeAge(2000));
console.log("Trainer Details: " + trainer.displayName());
console.log("Trainee Details: " + trainee.showDetails());
