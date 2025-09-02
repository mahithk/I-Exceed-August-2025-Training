let cart = []

function addItem(item, price) {
    cart.push({ item, price })
    console.log(`${item} added for ₹${price}`)
}

function getTotal() {
    let total = cart.reduce((sum, p) => sum + p.price, 0)
    console.log(`Total Price: ₹${total}`)
}

addItem("Book", 200)
addItem("Pen", 20)
addItem("Bag", 500)
getTotal()



let students = [
    { name: "Anu", marks: [80, 75, 90] },
    { name: "Ravi", marks: [60, 70, 65] },
    { name: "Meena", marks: [95, 92, 88] }
]

function calculateAverage(marks) {
    return marks.reduce((a, b) => a + b, 0) / marks.length
}

students.forEach(s => {
    let avg = calculateAverage(s.marks)
    let grade = avg >= 90 ? "A" : avg >= 75 ? "B" : "C"
    console.log(`${s.name} - Average: ${avg.toFixed(2)}, Grade: ${grade}`)
})
