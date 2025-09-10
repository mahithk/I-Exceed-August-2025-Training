function fetchData(id, callback) {
    setTimeout(() => {
        callback(null, { id, value: Math.random() * 100 });
    }, Math.random() * 1000);
}

function runParallel(tasks, callback) {
    let results = [];
    let completed = 0;
    tasks.forEach((task, index) => {
        task((err, result) => {
            if (err) return callback(err);
            results[index] = result;
            completed++;
            if (completed === tasks.length) callback(null, results);
        });
    });
}

runParallel([
    cb => fetchData(1, cb),
    cb => fetchData(2, cb),
    cb => fetchData(3, cb),
    cb => fetchData(4, cb)
], (err, results) => {
    if (err) return console.error(err);
    console.log("All results:", results);
});
