function Employee(name, id) {
    this.name = name
    this.id = id
}
Employee.prototype.getDetails = function () {
    return this.name + " - " + this.id
}
function Manager(name, id, department) {
    Employee.call(this, name, id)
    this.department = department
}
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager
Manager.prototype.getDepartment = function () {
    return this.department
}
let e1 = new Employee("Alice", 101)
let m1 = new Manager("Bob", 201, "HR")
let m2 = new Manager("Charlie", 202, "Finance")
console.log(e1.getDetails())
console.log(m1.getDetails())
console.log(m1.getDepartment())
console.log(m2.getDetails())
console.log(m2.getDepartment())
