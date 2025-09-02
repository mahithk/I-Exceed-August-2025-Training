let todos = []

function addTask(task) {
    todos.push(task)
    console.log(`Task added: ${task}`)
}

function removeTask(task) {
    todos = todos.filter(t => t !== task)
    console.log(`Task removed: ${task}`)
}

function listTasks() {
    console.log("Your Tasks:")
    todos.forEach((t, i) => console.log(`${i + 1}. ${t}`))
}

addTask("Complete assignment")
addTask("Study JavaScript")
addTask("Go for a walk")
listTasks()
removeTask("Go for a walk")
listTasks()
