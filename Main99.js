function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let numbers = [5, 12, 8, 130, 44];

let evenNumbers = filterArray(numbers, function (num) {
    return num % 2 === 0;
});

let greaterThanTen = filterArray(numbers, function (num) {
    return num > 10;
});

console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);
console.log("Numbers > 10:", greaterThanTen);
