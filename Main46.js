let num1 = 9007199254740991
let num2 = num1 + 10
console.log("Number:", num2)

let big1 = 9007199254740991n
let big2 = big1 + 10n
console.log("BigInt:", big2)

let mix = BigInt(num1) + 100n
console.log("Mix with BigInt:", mix)

let numConverted = Number(big2)
console.log("Converted BigInt to Number:", numConverted)

if (big2 > BigInt(num2)) {
    console.log("BigInt is larger")
} else {
    console.log("Number is larger or equal")
}
