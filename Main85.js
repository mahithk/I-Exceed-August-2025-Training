const employee = {
    employees: [],
    addEmployee: function (id, name, salary) {
        this.employees.push({ id, name, salary });
        console.log(`${name} added with ID: ${id}`);
    },
    removeEmployee: function (id) {
        this.employees = this.employees.filter(e => e.id !== id);
        console.log(`Employee with ID ${id} removed`);
    },
    updateSalary: function (id, newSalary) {
        let emp = this.employees.find(e => e.id === id);
        if (emp) {
            emp.salary = newSalary;
            console.log(`Salary updated for ${emp.name}`);
        }
    },
    listEmployees: function () {
        console.log("Employee List:");
        this.employees.forEach(e => console.log(`${e.id}: ${e.name} - ₹${e.salary}`));
    }
};

employee.addEmployee(101, "Ravi", 50000);
employee.addEmployee(102, "Meena", 60000);
employee.listEmployees();
employee.updateSalary(101, 55000);
employee.removeEmployee(102);
employee.listEmployees();
