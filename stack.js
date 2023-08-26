// Creamos una clase Node que representa un nodo en el stack
class Node {
    constructor(value) {
      this.value = value;
      this.below = null;
    }
}
  
class Stack {
    constructor() {
        // Definimos dentro del constructor lo que va primero
        // y lo que va al final
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
  
    // El método push agrega un nuevo nodo en la parte superior del stack
    push(value) {
        const newNode = new Node(value);
        
        // Si el stack está vacío, simplemente asignamos el nuevo nodo a top
        // y al nodo bottom
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // Si el stack no está vacío hacemos que el nuevo nodo apunte al nodo 
            // que estaba en la parte superior del stack
            newNode.below = this.top;
            this.top = newNode;
        }
  
        this.length++;
        return this
    }
  
    // El método pop elimina y devuelve el valor del nodo 
    // en la parte superior del stack
    pop() {
        // Si el stack está vacío, devolvemos null
        if (!this.top) {
            return null;
        }
      
        const deletedNode = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
  
        // Si el stack no está vacío, guardamos el valor del nodo en la parte
        // superior en una variable
        // hacemos que top apunte al siguiente nodo en el stack 
        // y luego devolvemos el stack.
        this.top = this.top.below;
        this.length--;
  
        return deletedNode;
    }
  
    // El método peek devuelve el valor del nodo en la parte superior del stack 
    // sin eliminarlo. Si el stack está vacío, devuelve null.
    peek() {
        return this.top ? this.top.value : null;
    }
  
    // El método isEmpty devuelve true si el stack está vacío 
    // y false en caso contrario.
    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push(5)
myStack.push(6)
myStack.push(7)
myStack.push(8)
myStack.push(9)
myStack.push(10)

console.log(myStack.top)
console.log(myStack.bottom)
console.log(`Current length: ${myStack.length}`)

console.log(myStack.pop())

console.log(myStack.top)
console.log(myStack.bottom)
console.log(`Current length: ${myStack.length}`)

let currentStack = myStack.top
while (currentStack) {
    console.log(currentStack.value)

    currentStack = currentStack.below;
}
    


