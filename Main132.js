function uniqueNumbers(arr) {
    let set = new Set(arr);
    return Array.from(set);
}
let numbers = [4, 2, 7, 2, 4, 9, 7, 1];
let unique = uniqueNumbers(numbers);
console.log("Unique Numbers:", unique);
