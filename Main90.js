let person1 = {
    name: "David",
    greet: function (age, city) {
        console.log("Hi, I am " + this.name + ", age " + age + ", from " + city)
    }
}
let person2 = { name: "Emma" }
let boundGreet1 = person1.greet.bind(person2, 25, "New York")
let boundGreet2 = person1.greet.bind(person2, 30, "London")
let boundGreet3 = person1.greet.bind(person1, 40, "Paris")
boundGreet1()
boundGreet2()
boundGreet3()
