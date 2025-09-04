let products = {
    laptop: 55000,
    phone: 20000,
    watch: 5000
}

function calculateBill(obj) {
    let total = 0
    for(let item in obj) {
        total += obj[item]
    }
    return total
}

let totalAmount = calculateBill(products)
console.log("Total Amount:", totalAmount)

let discountCode = "OFFER10"
let discount = 0

if(discountCode.startsWith("OFFER")) {
    discount = totalAmount * 0.1
}
let finalAmount = totalAmount - discount

console.log("Discount Applied:", discount)
console.log("Final Amount:", finalAmount)

try {
    if(finalAmount <= 0) throw new Error("Invalid final amount")
    console.log("Bill processed successfully")
} catch(err) {
    console.log("Error:", err.message)
}
