function unreliableTask(callback) {
    setTimeout(() => {
        if (Math.random() > 0.7) callback(null, "Success");
        else callback("Failure", null);
    }, 300);
}

function retry(task, retries, callback) {
    task((err, result) => {
        if (!err) return callback(null, result);
        if (retries === 0) return callback("All retries failed", null);
        retry(task, retries - 1, callback);
    });
}

retry(unreliableTask, 5, (err, result) => {
    if (err) console.error(err);
    else console.log("Task completed:", result);
});
