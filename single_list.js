export class Node {
    // Esta clase Node representa un nodo en la lista
    constructor(value) {
        // tiene un valor y un enlace al siguiente nodo. 
      this.value = value;
      this.next = null;
    }
}
  
  // La clase LinkedList es la lista en sí misma
export class LinkedList {
    constructor() {
          // Tiene una referencia al primer nodo (head) 
      this.head = null;
        // también tiene una referencia al último nodo (tail)
      this.tail = null;
          // y un contador de longitud (length).
      this.length = 0;
    }
  
    // El método append agrega un nuevo nodo al final de la lista
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
              // Si la lista está vacía, head y tail apuntan al nuevo nodo
        this.head = newNode;
        this.tail = newNode;
              // Si la lista no está vacía,
      } else {
              // El enlace next del último nodo en la lista apunta al nuevo nodo
        this.tail.next = newNode;
              // y tail se actualiza para que apunte al nuevo nodo
        this.tail = newNode;
      }
      this.length++;
    }
  
    // El método prepend agrega un nuevo nodo al inicio de la lista
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
              // Si la lista está vacía, head y tail apuntan al nuevo nodo
        this.head = newNode;
        this.tail = newNode;
      } else {
              // Si la lista no está vacía, 
              // el enlace next del nuevo nodo apunta al primer nodo en la lista 
        newNode.next = this.head;
              // y head se actualiza para que apunte al nuevo nodo.
        this.head = newNode;
      }
      this.length++;
    }
  
    // Elimina un nodo por su valor
    delete(value) {
          // Si la lista está vacía, no se hace nada
      if (!this.head) {
        return null;
      }
          // Si el nodo a eliminar es el primer nodo en la lista
      if (this.head.value === value) {
              // El puntero head se actualiza para apuntar al siguiente nodo
        this.head = this.head.next;
        this.length--;
        return;
      }
        // En caso contrario
          // se recorre la lista buscando el nodo anterior al que se quiere eliminar
      let currentNode = this.head;
      while (currentNode.next) {
              // Una vez encontrado, se actualiza el puntero next del nodo anterior
            // para que apunte al siguiente nodo después del que se quiere eliminar.
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          this.length--;

          if (!currentNode.next) {
            this.tail = currentNode;
          }

          return;
        }
        currentNode = currentNode.next;
      }
    }
}
