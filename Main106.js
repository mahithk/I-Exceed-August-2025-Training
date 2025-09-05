function calculate(a, b, operation, callback) {
    setTimeout(() => {
        let result = operation(a, b);
        callback(result);
    }, 500);
}

calculate(10, 5, (x, y) => x + y, (res1) => {
    calculate(res1, 2, (x, y) => x * y, (res2) => {
        calculate(res2, 3, (x, y) => x - y, (res3) => {
            console.log("Final Result:", res3);
        });
    });
});
