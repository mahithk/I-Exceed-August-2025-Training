function customFilter(arr, condition, callback) {
    setTimeout(() => {
        let result = [];
        for (let val of arr) {
            if (condition(val)) {
                result.push(val);
            }
        }
        callback(result);
    }, 600);
}

customFilter([2, 5, 8, 11, 14], (n) => n % 2 === 0, (res) => {
    console.log("Filtered Even Numbers:", res);
});
