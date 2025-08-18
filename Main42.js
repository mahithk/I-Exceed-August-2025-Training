function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 29;
console.log(n, "is prime?", isPrime(n));
console.log(15, "is prime?", isPrime(15));
console.log(2, "is prime?", isPrime(2));
