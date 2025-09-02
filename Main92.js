let message = "   JavaScript is Amazing and Powerful   "
console.log("Original Message:", message)

let trimmed = message.trim()
console.log("Trimmed:", trimmed)

let upper = trimmed.toUpperCase()
console.log("Uppercase:", upper)

let lower = trimmed.toLowerCase()
console.log("Lowercase:", lower)

let replaced = trimmed.replace("Amazing", "Fantastic")
console.log("Replaced:", replaced)

let starts = trimmed.startsWith("JavaScript")
console.log("Starts with 'JavaScript':", starts)

let ends = trimmed.endsWith("Powerful")
console.log("Ends with 'Powerful':", ends)

let includesWord = trimmed.includes("is")
console.log("Includes 'is':", includesWord)

let sliced = trimmed.slice(0, 10)
console.log("Sliced First 10 Chars:", sliced)

let splitted = trimmed.split(" ")
console.log("Splitted Words:", splitted)

let repeated = "Hi! ".repeat(3)
console.log("Repeated:", repeated)

let charAt5 = trimmed.charAt(5)
console.log("Character at Index 5:", charAt5)

let indexOfWord = trimmed.indexOf("Powerful")
console.log("Index of 'Powerful':", indexOfWord)
