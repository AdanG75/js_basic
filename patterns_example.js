// Task (exercise.js)

//     id: un identificador único para cada tarea.
//     description: una descripción de la tarea.
//     completed: un booleano que indica si la tarea está completada o no.
//     users: un array de usuarios asignados a la tarea.
//     assignUser(): un método para asignar usuarios a una tarea
//     completeTask(): un método que cambia el valor de la propiedad completed a true 
//                     y llama a notifyUsers().
//     notifyUsers(): un método para notificar a todos los usuarios asignados que la 
//                    tarea fue completada.

class Task{
    constructor(id, description){
       // Tu código aquí 👈
       this.id = id;
       this.description = description;
       this.completed = false;
       this.users = [];
    }
  
    assignUser(user){
     // Tu código aquí 👈
     if (user instanceof User) {
        this.users.push(user)
     } else {
        throw new Error("Objeto no es del tipo usuario");
     }
     
    }
  
    completeTask() {
       // Tu código aquí 👈
       this.completed = true;
       this.notifyUsers()
    }
  
    notifyUsers() {
       // Tu código aquí 👈
       this.users.forEach((element) => element.notify(this))
    }
}


// User (User.js)

//     name: El nombre del usuario
//     notify(task): un método que recibirá una tarea y le notificará al usuario que la 
//                   tarea fue completada

class User {
    constructor(name) {
       // Tu código aquí 👈
       this.name = name;

    }
  
    notify(task) {
       // Tu código aquí 👈
       const message = `La tarea con id ${task.id} ha sido completada`;
       console.log(message)

       return message;
    }
  }


//   Authorization (Authorization.js)

//     checkAuthorization(): un método el cual verificará si un ususario está autorizado para 
//                           completar una tarea.

class Authorization {

    checkAuthorization(user, task) {
      // Tu código aquí 👈
      const authorizedUser = task.users.find((element) => element === user);

      if (authorizedUser === undefined) {
        throw new Error("No autorizado");
      } else { 
        console.log("Usuario Autorizado")

        return true;
      }
    }
}


// TaskDecorator (TaskDecorator.js)

//     task: recibirá una tarea ya hecha con la clase de Task
//     deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
//     priority: prioridad para completar la tarea (high, medium o low)

//     Priority y deadline vendrán dentro de un objeto options

class TaskDecorator{
    constructor(task, options) {
       // Tu código aquí 👈
       this.task = task;

       if (options.deadline.match(/^\d{4}[-/]\d{2}[-/]\d{2}$/) != null) {
        this.deadline = options.deadline;
       } else {
        throw new Error("Fecha no valida")
       }
       
       const priorities = ["high", "medium", "low", "alta", "media", "baja"];
       if (priorities.find((element) => element === options.priority)) {
        this.priority = options.priority;
       } else {
        throw new Error("Tipo de prioridad no valida")
       }
       
    }
  
    assignUser(user) {
       // Tu código aquí 👈
       this.task.assignUser(user)
    }
  
    completeTask() {
       // Tu código aquí 👈
       this.task.completeTask()
    }
  
    notifyUsers() {
       // Tu código aquí 👈
       this.task.notifyUsers()
    }
}

// TaskBuilder(TaskBuilder.js)

//     task: Instanciará la clase task creada al inicio
//     Deberá tener un método por cada uno de los siguientes datos: id, description, 
//     completed, users (debe ser capaz de recibir 1 o varios users), deadline, priority.

class TaskBuilder {
    constructor(task = null, options = null) {
       // Tu código aquí 👈
       const priorities = ["high", "medium", "low", "alta", "media", "baja"];
       if (task != null) {
        this.task = task;
       } else {
        this.task = {
            id: -1,
            description: "",
            completed: false,
            users: []
        };
       }

       if (options != null) {
        if (options.deadline.match(/^\d{4}[-/]\d{2}[-/]\d{2}$/) != null) {
            this.deadline = options.deadline;
        } else {
            throw new Error("Fecha no valida")
        }

        
        if (priorities.find((element) => element === options.priority)) {
            this.priority = options.priority;
        } else {
            throw new Error("Tipo de prioridad no valida")
        }
       } else {
        this.deadline = null;
        this.priority = null;
       }
    }
  
    setId(id) {
       // Tu código aquí 👈
       this.task.id = id;

       return this;
    }
  
    setDescription(description) {
       // Tu código aquí 👈
       this.task.description = description;

       return this;
    }
  
    setCompleted(completed) {
       // Tu código aquí 👈
       this.task.completed = completed;

       return this;
    }
  
    setUsers(users) {
       // Tu código aquí 👈
       if (users.every((element) => element instanceof User)) {
        this.task.users = users;
       } else {
        throw new Error("Objeto no es de tipo Ususario")
       }
       

       return this;
    }
  
    setDeadline(deadline) {
       // Tu código aquí 👈
       if (deadline.match(/^\d{4}[-/]\d{2}[-/]\d{2}$/) != null) {
        this.deadline = deadline;
       } else {
        throw new Error("Fecha no valida")
       }

       return this;
    }
  
    setPriority(priority) {
       // Tu código aquí 👈
       const priorities = ["high", "medium", "low", "alta", "media", "baja"];

       if (priorities.find((element) => element === priority)) {
            this.priority = priority;
        } else {
            throw new Error("Tipo de prioridad no valida")
        }

       return this;
    }
  
    build() {
       // Tu código aquí 👈
       return {
        task: this.task,
        deadline: this.deadline,
        priority: this.priority,
       };
    }
}

// TaskManager (TaskManager.js)

//     tasks: un array vacío para almacenar las tareas
//     getInstance(): un método que devuelva una instancia de TaskManager. 
//                    Si ya hay una instancia existente, devuelve esa instancia en lugar 
//                    de crear una nueva.
//     addTask(task): un método para agregar tareas al array que debe verificar si esta 
//                    hereda de la clase Task
//     getTasks(): un método que regresará todas las tareas
//     getTaskById(id): un método que buscará una tarea por su id y la retornará, 
//                      en caso de no existir regresará null

class TaskManager {
    constructor() {
       // Tu código aquí 👈
       if (!TaskManager.instance) {
        this.tasks = [];
        TaskManager.instance = Object.freeze(this);
       }

       return TaskManager.instance;
    }
  
    static getInstance() {
       // Tu código aquí 👈

       return new TaskManager();
    }
  
    addTask(task){
       // Tu código aquí 👈
       if (task instanceof Task) {
        this.tasks.push(task)
       } else {
        throw new Error("El objeto no es de tipo \"Task\"")
       }
    }
  
    getTasks(){
       // Tu código aquí 👈
       return this.tasks;
    }
  
    getTaskById(id){
       // Tu código aquí 👈
       const foundTask = this.tasks.find((element) => element.id === id);
       if (foundTask) {
        return foundTask;
       } else {
        return null;
       }
    }
}

const taskManager1 = TaskManager.getInstance();
const taskManager2 = TaskManager.getInstance();
const taskManager = TaskManager.getInstance();

const authorization = new Authorization()

const task = new Task('5', 'Pasear al perro')
const mockTask = new Task(1, "Mock task")
const task4 = new Task('4', 'Comprar pan')

const user1 = new User("Juan")
const user2 = new User("Maria")

const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

taskManager.addTask(mockTask);

task.assignUser(user1)
task.assignUser(user2)
task4.assignUser(user2)

console.log(taskManager1 === taskManager2)
console.log(taskManager.getTasks());
console.log(taskDecorator)
console.log(authorization.checkAuthorization(user2, task4))