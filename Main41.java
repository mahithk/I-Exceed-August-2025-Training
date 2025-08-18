function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log("10 + 5 =", calculator(10, 5, '+'));
console.log("10 - 5 =", calculator(10, 5, '-'));
console.log("10 * 5 =", calculator(10, 5, '*'));
console.log("10 / 5 =", calculator(10, 5, '/'));
