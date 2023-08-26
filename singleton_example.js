class User {
    // Este código no debe ser editado ❌
    constructor(name) {
      this.name = name;
      this.messages = [];
    }
  
    receiveMessage(message) {
      this.messages.push(message);
    }
}

// Tu objetivo es crear la lógica en la clase Chat para garantizar que exista una única
// instancia de la clase en todo momento.

// Además, la clase Chat deberá contener los siguientes métodos:

//     sendMessage(message): Este método debe permitir enviar un mensaje a todos los 
//                           usuarios en la lista, accediendo al método receiveMessage 
//                           de cada instancia de usuario.

//     addUser(user): Este método debe agregar un nuevo usuario a la lista, verificando 
//                    que sea una instancia de la clase User (el código de esta clase la 
//                    puedes ver dentro del sistema de archivos del playground).

//     removeUser(name): Este método te permitirá eliminar un usuario de la lista por su nombre.

// Y deberás almacenar los usuarios en una propiedad llamada users.

class Chat {
    // Tu código aquí 👈
    constructor() {
        if (!Chat.instance) {
            this.users = [];
            Chat.instance = Object.freeze(this);
        }
        
        return Chat.instance;
    }

    sendMessage(message) {
        this.users.forEach((element) => element.receiveMessage(message))
    }

    addUser(user) {
        if (user instanceof User) {
            this.users.push(user)
        } else {
            throw new Error("Solo se permiten objetos de tipo \"User\"")
        }
    }

    removeUser(name) {
        const indexOfUser = this.users.findIndex((element) => element.name === name)
        if (indexOfUser > -1) {
            return this.users.splice(indexOfUser, 1);
        } else {
            return "Usuario no encontrado";
        }
    }
}

const chat1 = new Chat();
const chat2 = new Chat();
const chat3 = new Chat();

const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat1.addUser(user1);
chat1.addUser(user2);

chat1.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)
console.log(chat3.users)

console.log(chat1 === chat2 && chat1 === chat3)