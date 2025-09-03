function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

function subtract(a, b, callback) {
    let result = a - b;
    callback(result);
}

function multiply(a, b, callback) {
    let result = a * b;
    callback(result);
}

function divide(a, b, callback) {
    if (b === 0) {
        callback("Division by zero not allowed");
    } else {
        let result = a / b;
        callback(result);
    }
}

add(10, 5, function (res) {
    console.log("Addition Result:", res);
});
subtract(10, 5, function (res) {
    console.log("Subtraction Result:", res);
});
multiply(10, 5, function (res) {
    console.log("Multiplication Result:", res);
});
divide(10, 5, function (res) {
    console.log("Division Result:", res);
});
