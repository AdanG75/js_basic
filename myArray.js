// Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin 
// utilizar métodos ya existentes.

// Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica 
// de los siguientes:

//     map(func): Itera por cada elemento de nuestra estructura aplicando la función a cada 
//                uno de ellos y devolviendo un nuevo array (debe ser una instancia de MyArray)
//     filter(func): Itera por cada elemento de nuestra estructura filtrándolos según lo que 
//                   indique la función y devuelve un array con los elementos filtrados 
//                   (debe ser una instancia de MyArray)
//     join(character): Concatena todos los elementos de nuestra estructura de datos en un 
//                      string separándolos por el carácter indicado (en caso de no recibir
//                      un carácter, será una , por defecto)
//     push(item) Agrega un item al final y aumenta el length
//     pop() Elimina el último elemento y lo retorna, al igual que disminuye el length
//     shift() Elimina el primer elemento y lo retorna, al igual que disminuye el length
//     unshift(item) Agrega un elemento al inicio y aumenta el length

// Además, deberás guardar los items dentro de la propiedad data y el número de elementos 
// dentro de la propiedad length para poder consultarlos desde las pruebas.
class MyArray {
    constructor(data = {}) {
      // Tu código aquí 👈
      this.data = data;
      this.length = Object.keys(this.data).length;
    }
  
    map(func) {
      // Tu código aquí 👈
      let objetcToReturn = new MyArray()

      for (let i = 0; i < this.length; i ++) {
        objetcToReturn.push(func(this.data[i]))
      }

      return objetcToReturn;
    }
  
    filter(func) {
      // Tu código aquí 👈
      let objetcToReturn = new MyArray()

      for (let i = 0; i < this.length; i ++) {
        const element = this.data[i];
        if (func(element)) {
            objetcToReturn.push(element)
        }
      }

      return objetcToReturn;
    }
  
    push(item) {
      // Tu código aquí 👈
      this.data[this.length] = item;
      this.length++;

      return this.length;
    }
  
    pop() {
      // Tu código aquí 👈
      if (this.length === 0) {
        return undefined;
      }

      this.length -= 1;
      const deletedObject = this.data[this.length];
      delete this.data[this.length];

      return deletedObject;
    }
  
    join(character = ",") {
      // Tu código aquí 👈
      let stringToReturn = "";
      for (const key in Object.keys(this.data)) {
        if (key == this.length - 1) {
            stringToReturn = stringToReturn + this.data[key];
        } else {
            stringToReturn = stringToReturn + this.data[key] + character;
        }
      }

      return stringToReturn;
    }
  
    shift() {
      // Tu código aquí 👈
      if (this.length === 0) {
        return {};
      }

      const deletedObject = this.data[0];
      this.length--;

      for (const key in Object.keys(this.data)) {
        this.data[key] = this.data[Number(key) + 1];
      }

      delete this.data[this.length];

      return deletedObject;
    }
  
    unshift(item) {
      // Tu código aquí 👈
      if (item === null || item === undefined) {
        return this.length;
      }

      if (this.length > 0) {
        let auxItem1 = null;
        let auxItem2 = null;

        for (const key in Object.keys(this.data)) {

            if (key == 0) {
                auxItem1 = this.data[key];
                this.data[key] = item;
            } else {
                auxItem1 = auxItem2;
            }

            auxItem2 = this.data[Number(key) + 1];
            this.data[Number(key) + 1] = auxItem1;
        }
      } else {
        this.data[0] = item;
      }
      
      this.length++;

      return this.length;
    }
}

let myArray = new MyArray();
myArray.push(5)
myArray.push(4)
myArray.push(6)
myArray.push(9)
myArray.push(0)
myArray.push("fg")
myArray.push("sdfds")
myArray.push(true)

console.log(myArray.pop())
console.log(myArray.shift())

console.log(myArray.unshift(45))
console.log(myArray.unshift(54))

console.log(myArray)
console.log(myArray.join("*"))

const resultMap = myArray.map((element) => element * 2)
console.log(resultMap)

const resultFilter = myArray.filter(element => typeof(element) === "string")
console.log(resultFilter)