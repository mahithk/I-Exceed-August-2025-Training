for (let i = 0; i <= 10; i++) {
    let square = Math.pow(i, 2)
    let sqrt = Math.sqrt(i)
    console.log("Number:", i, "Square:", square, "Sqrt:", sqrt)
}

let angle = Math.PI / 4
console.log("sin:", Math.sin(angle))
console.log("cos:", Math.cos(angle))
console.log("tan:", Math.tan(angle))

let random = Math.random() * 100
console.log("Random 0-100:", random)

for (let j = 1; j <= 5; j++) {
    let value = Math.sin(j)
    let plot = "*".repeat(Math.round(value * 10 + 10))
    console.log(j + " -> " + plot)
}
