class Messages {
    // No debes editar este código ❌
    constructor() {
      this.history = [];
    }
  
    sendMessage(text) {
      this.history.push(text);
    }
  
    getHistory() {
      return this.history;
    }
}


class User {
    constructor(name) {
      // Tu código aquí 👈
      this.name = name;
      this.isLogged = false;
    }
  
    login() {
      // Tu código aquí 👈
      this.isLogged = true;
    }
  
    logout() {
      // Tu código aquí 👈
      this.isLogged = false;
    }
  
    isLoggedIn() {
      // Tu código aquí 👈
      return this.isLogged;
    }
}


class MessagesProxy {
    constructor(messages, user) {
      // Tu código aquí 👈
      this.messages = messages;
      this.user = user;
    }
  
    sendMessage(text) {
      // Tu código aquí 👈
      if (!this.user.isLogged) {
        throw new Error("Usuario no registrado");
      }
      this.messages.sendMessage(text)
    }
  
    getHistory() { 
      // Tu código aquí 👈
      if (!this.user.isLogged) {
        throw new Error("Usuario no registrado");
      }
      return this.messages.getHistory();
    }
}

const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

user.login()
messagesProxy.sendMessage("Hola")
console.log(messagesProxy.getHistory())

// throw an error
// user.logout()
// console.log(messagesProxy.getHistory())
