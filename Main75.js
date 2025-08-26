let person = {
    firstName: "Rahul",
    lastName: "Sharma",
    age: 25,
    city: "Bangalore",
    skills: ["JavaScript", "Python", "C++"],
    address: {
        street: "MG Road",
        pincode: 560001
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    updateCity: function (newCity) {
        this.city = newCity;
    }
};

console.log("Full Name:", person.fullName());
console.log("Age:", person.age);
console.log("Lives in:", person.city);
console.log("Skills:", person.skills.join(", "));
person.updateCity("Hyderabad");
console.log("New City:", person.city);
console.log("Street:", person.address.street);
console.log("Pincode:", person.address.pincode);
person.skills.push("Java");
console.log("Updated Skills:", person.skills);
