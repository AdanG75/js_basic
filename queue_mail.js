/*
En este desafío, tendrás que implementar la lógica para procesar correos electrónicos 
en una empresa utilizando una queue, priorizando siempre los emails más antiguos.

Tendrás crear una clase Queue para representar nuestra cola de correos electrónicos. 
La clase debe tener los siguientes métodos:

    enqueue(from, to, body, subject): Agrega un correo electrónico al final de la queue.
    dequeue(): Elimina y devuelve un objeto con siguientes propiedades: 
    { from, to, body, subject } del email más antiguo de la cola.
    peek(): Devuelve el correo electrónico más antiguo de la cola sin eliminarlo.
    size(): Devuelve la cantidad de correos electrónicos en la cola.

Tendrás una clase Mail ya construida para usarla dentro del desarrollo de tu solución 
que simulará ser un nodo dentro de la queue.

*/

class Mail {
    constructor(from, to, body, subject) {
      this.from = from;
      this.to = to;
      this.body = body;
      this.subject = subject;
      this.next = null;
    }

    getMail() {
        return {
            from: this.from,
            to: this.to,
            body: this.body,
            subject: this.subject,
        };
    }
}

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    enqueue(from, to, body, subject) {
      // Tu código aquí 👈🏻
      const newMail = new Mail(from, to, body, subject);

      if (!this.first) {
        this.first = newMail;
        this.last = newMail;
      } else {
        this.last.next = newMail;
        this.last = newMail;
      }

      return ++this.length;
    }
  
    dequeue() {
      // Tu código aquí 👈🏻
      const currentEmail = this.first;
      if (!this.first.next) {
        this.last = null;
      }

      this.first = this.first.next;
      this.length--;

      return currentEmail.getMail();
    }
  
    peek() {
      // Tu código aquí 👈🏻
      return this.first.getMail();
    }
  
    size() {
      // Tu código aquí 👈🏻
      return this.length;
    }
}

const emailQueue = new Queue();
emailQueue.enqueue(
    'jane@ejemplo.com',
    'support@ejemplo.com',
    'No puedo iniciar sesión en mi cuenta',
    'Problema de inicio de sesión'
);
emailQueue.enqueue(
    'joe@ejemplo.com',
    'support@ejemplo.com',
    'Mi pedido no ha llegado todavía',
    'Estado del pedido'
);

console.log(emailQueue.peek())
console.log(emailQueue.dequeue())
console.log(emailQueue.size())
