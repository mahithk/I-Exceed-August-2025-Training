let employees = [
    {name: "Raj", salary: 30000},
    {name: "Sam", salary: 40000},
    {name: "Anita", salary: 50000}
]

function calculateBonus(emp) {
    let bonus = emp.salary * 0.1
    return bonus
}

employees.forEach(e => {
    let bonus = calculateBonus(e)
    let message = `${e.name} earns salary ${e.salary} and bonus ${bonus}`
    console.log(message)
})

let totalPayroll = employees.reduce((acc, e) => acc + e.salary, 0)
console.log("Total Payroll:", totalPayroll)

try {
    if(totalPayroll < 0) throw new Error("Invalid payroll value")
    console.log("Payroll calculated successfully")
} catch(err) {
    console.log("Error:", err.message)
}
