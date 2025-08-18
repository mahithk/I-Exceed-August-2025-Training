function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

let num = 5;
console.log("Factorial of", num, "is", factorial(num));
console.log("Factorial of 6 is", factorial(6));
console.log("Factorial of 0 is", factorial(0));
