function createTaskPlanner() {
    // Tu código aquí 👈
    let tasks = []
    return {
        addTask(task) {
            if (checkExistanceTask(tasks, task) === false) {
                task.completed = false
                tasks.push(task)
            }
            return task;  
        },
        removeTask(idTask) {
            const index = getIndexOfTask(tasks, idTask);
            if (index > -1) { // only splice array when item is found
                tasks.splice(index, 1); // 2nd parameter means remove one item only
                return true
            }

            return false
        },
        getTasks() {
            return tasks;
        },
        getPendingTasks() {
            return tasks.filter((task) => task.completed === false);
        },
        getCompletedTasks() {
            return tasks.filter((task) => task.completed === true);
        },
        markTaskAsCompleted(value) {
            let task = getTask(tasks, value)
            if (task !== null) {
                task.completed = true
            }

            return task;
        },
        getSortedTasksByPriority() {
            let copyTask = tasks.slice()
            return copyTask.sort((a, b) => a.priority - b.priority)
        },
        filterTasksByTag(tag) {
            return tasks.filter((task) => task.tags.find((currentTag) => currentTag === tag));
        },
        updateTask(taskId, updates) {
            const index = getIndexOfTask(tasks, taskId);
            if (index > -1) {
                tasks[index] = {...tasks[index], ...updates}
            }
            console.log(tasks[index])
            return tasks[index];
        },
    }
}

function getTask(tasks, idOrNameOfTask) {
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i]
        if (element.id === idOrNameOfTask || element.name === idOrNameOfTask) {
            return element;
        }
    }

    return null;
}

function checkExistanceTask(tasks, task) {
    const existanceTask = tasks.find((currentTask) => 
        currentTask.id === task.id || currentTask.name === task.name
    );

    return !(typeof(existanceTask) === "undefined");
}

function getIndexOfTask(tasks, idTask) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === idTask) {
            return i;
        }
    }

    return -1;
}

const taskPlaner = createTaskPlanner()
taskPlaner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
})
taskPlaner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
})
taskPlaner.addTask({
    id: 2,
    name: "Plan random",
    priority: 3,
    tags: ["personal"]
})
taskPlaner.addTask({
    id: 3,
    name: "Llamar a Luis",
    priority: 3,
    tags: ["personal"]
})
taskPlaner.addTask({
    id: 4,
    name: "Comer albondigas",
    priority: 2,
    tags: ["personal", "home"]
})
taskPlaner.markTaskAsCompleted("Llamar a Juan")
console.log(taskPlaner.getTasks())
console.log("\n*****************************************************\n")
console.log(taskPlaner.getCompletedTasks())
console.log("\n*****************************************************\n")
console.log(taskPlaner.getPendingTasks())
console.log("\n*****************************************************\n")
console.log(taskPlaner.filterTasksByTag("home"))
console.log("\n*****************************************************\n")
console.log(taskPlaner.getTasks())
console.log("\n*****************************************************\n")
console.log(taskPlaner.removeTask(3))
console.log("\n*****************************************************\n")
console.log(taskPlaner.getTasks())
console.log("\n*****************************************************\n")
taskPlaner.addTask({
    id: 5,
    name: "Barrer calle",
    priority: 2,
    tags: ["home"]
})
console.log(taskPlaner.getSortedTasksByPriority())
console.log("\n*****************************************************\n")
taskPlaner.markTaskAsCompleted(4)
taskPlaner.updateTask( 4,
    {
        date: "12/04/23",
        limitDay: "15/04/23"
    }
)
console.log(taskPlaner.getTasks())

const array1 = [{id: 1}, {id: 9}, {id: 6}, {id: 4}, {id: 2}, {id: 3}, {id: 5}, {id: 7}, {id: 0}, {id: 9}]
const array2 = array1.slice()
array1.sort((a, b) => a.id - b.id)
console.log(array1)
console.log(array2)