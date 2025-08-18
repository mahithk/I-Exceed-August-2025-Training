function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [34, 67, 12, 89, 45];
console.log("Numbers:", numbers);
console.log("Largest Number:", findLargest(numbers));
