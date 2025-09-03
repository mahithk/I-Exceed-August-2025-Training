function runTask(name, time, callback) {
    console.log("Starting task:", name);
    setTimeout(function () {
        console.log("Completed task:", name);
        callback();
    }, time);
}

function runTasksSequentially(tasks) {
    if (tasks.length === 0) {
        console.log("All tasks completed.");
        return;
    }
    let currentTask = tasks.shift();
    runTask(currentTask.name, currentTask.time, function () {
        runTasksSequentially(tasks);
    });
}

let taskQueue = [
    { name: "Task 1", time: 1000 },
    { name: "Task 2", time: 2000 },
    { name: "Task 3", time: 1500 },
    { name: "Task 4", time: 1000 }
];

runTasksSequentially(taskQueue);
