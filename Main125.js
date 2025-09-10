function step1(callback) {
    setTimeout(() => callback(null, "Start"), 500);
}

function step2(data, callback) {
    setTimeout(() => callback(null, data + " -> Step2"), 500);
}

function step3(data, callback) {
    setTimeout(() => callback(null, data + " -> Step3"), 500);
}

function step4(data, callback) {
    setTimeout(() => callback(null, data + " -> End"), 500);
}

function waterfall(tasks, finalCallback) {
    function nextTask(index, prevData) {
        if (index === tasks.length) return finalCallback(null, prevData);
        let task = tasks[index];
        if (index === 0) task((err, data) => nextTask(index + 1, data));
        else task(prevData, (err, data) => nextTask(index + 1, data));
    }
    nextTask(0, null);
}

waterfall([step1, step2, step3, step4], (err, result) => {
    if (err) console.error(err);
    else console.log("Waterfall result:", result);
});
