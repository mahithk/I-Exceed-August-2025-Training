let m = 10
let n = "10"

if (m == n) {
    console.log("== allows type coercion")
}

if (m === n) {
    console.log("=== checks strict equality")
} else {
    console.log("=== does not allow type coercion")
}

let assign = 5
console.log("Assignment with =", assign)

assign = assign + 5
console.log("After reassignment:", assign)

let check = (m == n)
console.log("Result of m == n:", check)
