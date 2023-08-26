/*
En este desafío tendrás que construir un organizador de tareas para planificar 
tus actividades diarias junto con sus correspondientes etiquetas.

Debes crear un closure que use Maps y Sets para devolver 2 funciones:

    addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante 
                         que conviertas todas las letras de la tarea en minúsculas usando 
                         toLowerCase para verificar si la tarea existe. En caso de que exista, 
                         solo se agregarán las nuevas etiquetas como un Set, en caso contrario, 
                         se crearán desde cero.

    printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.

*/

function taskManager() {
    // Tu código aquí 👈
    let tasks = new Map()

    return {
        addTask(task, tags) {
            const taskName = task.toLowerCase()
            const currentTags = tasks.get(taskName);

            if (currentTags === undefined) {
                tasks.set(taskName, new Set(tags))
            } else {
                const newSet = new Set([...currentTags, ...tags])
                tasks.set(taskName, newSet)
            }
        },
        printTasks() {
            return tasks;
        },
    };
}

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);

console.log(myTaskManager.printTasks());

myTaskManager.addTask("Comprar leche", ["lácteos", "compras"]);
console.log(myTaskManager.printTasks());