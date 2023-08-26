// Node define un nodo de la queue
class Node {
    constructor(value) {
        // Cada nodo tiene dos propiedades 
          // value que guarda el valor del nodo
      this.value = value;
          // next que guarda el siguiente nodo de la lista.
      this.next = null;
    }
}
  
// La clase Queue representa una cola
class Queue {
    // El constructor tiene tres propiedades
    constructor() {
        // first que apunta al primer nodo de la cola
        this.first = null;
        // last que apunta al último nodo de la cola
        this.last = null;
        // length que representa la cantidad de nodos en la cola.
        this.length = 0;
    }
  
    // El método enqueue agrega un nuevo nodo a la cola
    enqueue(value) {
        // Crea un nuevo nodo con el valor pasado como parámetro
        // y lo agrega al final de la cola
        const newNode = new Node(value);
        if (this.length === 0) {
            // Si la cola estaba vacía antes de agregar el nuevo nodo 
            // tanto first como last apuntan al nuevo nodo.
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }
  
    // El método dequeue remueve el primer nodo de la cola y devuelve su valor
    dequeue() {
        if (this.length === 0) {
            // Si la cola estaba vacía, el método lanza una excepción
            throw new Error("La queue está vacía");
        }
  
        // Guardamos la referencia al valor que será removido
        const removedNode = this.first;
        // Si la cola solo tenía un nodo antes de remover el primer nodo 
        // tanto first como last apuntan a null.
        if (this.first === this.last) {
            this.last = null;
        }
  
        // Reasignamos los valores
        this.first = this.first.next;
        // y reducimos la longitud
        this.length--;
  
        // Se retorna el valor del nodo removido
        return removedNode.value;
    }
  
    // El método isEmpty devuelve true si la cola está vacía
    // false en caso contrario.
    isEmpty() {
        return this.length === 0;
    }
  
    // El método size devuelve la cantidad de nodos en la cola.
    size() {
        return this.length;
    }
}

const myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.enqueue(8)
myQueue.enqueue(9)
myQueue.enqueue(10)

console.log(myQueue.first)
console.log(myQueue.last)

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue.first)
console.log(myQueue.last)