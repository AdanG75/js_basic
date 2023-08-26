import { LinkedList, Node } from "./single_list.js";

/*
En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged 
que heredará de un LinkedList (SinglyLinkedList.js) previamente creada.

Los métodos que deberás implementar son los siguientes

    get(index): este método recibirá un index y retornará el valor del nodo en la 
                posición buscada, en caso de recibir un index invalido este retornará null.

    insertAt(index, value): este método inserta un valor en la posición especificada.

    toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

    removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

    Las pruebas harán uso del método toArray() para comparar resultados.

*/


class LinkedListRecharged extends LinkedList {
    get(index){
     // Tu código aquí 👈
     const foundNode = this.getNode(index)

     return foundNode ? foundNode.value : null;
    }
  
    insertAt(index, value){
      if (index < 0 || index > this.length) {
        return null;
      }
      
      const newNode = new Node(value)

      if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else if (index == this.length) {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      } else {
        let actualIndex = 0;
        let actualNode = this.head;
        
        while(actualNode.next) {
            if (actualIndex == index - 1) {
                newNode.next = actualNode.next
                actualNode.next = newNode;
                break;
            } else {
                actualNode = actualNode.next;
                actualIndex++;
            }
        }
      }

      return ++this.length;
    }
  
    toArray(){
      // Tu código aquí 👈
      let arrayToReturn = [];
      let actualNode = this.head;

      while(actualNode) {
        arrayToReturn.push(actualNode.value)
        actualNode = actualNode.next;
      }

      return arrayToReturn;
    }
  
    removeAt(index){
      // Tu código aquí 👈
      let deletedValue = null;

      if (index < 0 || index >= this.length) {
        return deletedValue;
      } else if (index == 0) {
        deletedValue = this.head.value;
        this.head = this.head.next;
      } else {
        let actualIndex = 0;
        let actualNode = this.head;
        
        while(actualNode.next) {
            if (actualIndex == index - 1) {
                deletedValue = actualNode.next.value;
                actualNode.next = actualNode.next.next;
                
                if (!actualNode.next) {
                    this.tail = actualNode;
                }

                break;
            } else {
                actualNode = actualNode.next;
                actualIndex++;
            }
        }
      }

      this.length--;
      return deletedValue;
    }

    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index == 0) {
            return this.head;
        } else if (index == this.length - 1) {
            return this.tail;
        } else {
            let actualIndex = 1;
            let actualNode = this.head.next;
            
            while(actualNode) {
                if (actualIndex == index) {
                    return actualNode;
                } else {
                    actualNode = actualNode.next;
                    actualIndex++;
                }
            }
        }

        throw new Error("Node not found")
    }
}

let linkedList = new LinkedListRecharged()
linkedList.append(45)
linkedList.append(46)
linkedList.append(47)
linkedList.append(48)
linkedList.prepend('a')
linkedList.prepend('b')
linkedList.prepend('c')

linkedList.delete(48)
console.log(linkedList.removeAt(3))
const actualLength = linkedList.length
linkedList.insertAt(actualLength, 'x')
console.log(linkedList.removeAt(1))
const arrayFromList = linkedList.toArray()
console.log(arrayFromList)
console.log(linkedList.get(1))
console.log(linkedList.tail)

