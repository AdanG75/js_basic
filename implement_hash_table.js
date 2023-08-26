/*
Tu objetivo será el de implementar la lógica de la clase ContactList para agregar 
contactos y realizar las operaciones correspondientes.

La hashTable (ContactList) deberá tener los siguientes métodos:

    insert(name, phone): este método recibirá el nombre y el número de teléfono de un 
                         contacto, y agregará este último a la hashTable.

    get(name): este método recibirá el nombre de un contacto y devolverá su número 
               de teléfono. Si el contacto no existe, retornará null.

    retrieveAll(): este método devolverá un array con todos los buckets utilizados en la hashTable.

    delete(name): este método recibirá el nombre de un contacto y eliminará dicho contacto 
                  de la hashTable, en caso de no encontrar el name debe retornar null.

*/

class ContactList {
    constructor(size = 1) {
      // Tu código aquí 👈
      this.buckets = new Array(size);
      this.numBuckets = size;
    }
  
    hash(name) {
      let total = 0;
      for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
      }
      return total % this.numBuckets;
    }
  
    insert(name, phone) {
      // Tu código aquí 👈
      const index = this.hash(name);
      const objectToSave = [name, phone];

      if (this.buckets[index] === undefined) {
        this.buckets[index] = [];
      }

      this.buckets[index].push(objectToSave)

      return objectToSave;
    }
  
    get(name) {
      // Tu código aquí 👈
      const index = this.hash(name);

      if (this.buckets[index] === undefined) {
        return null;
      }

      const result = this.buckets[index].find((element) => element[0] === name)

      return result ? result[1] : null;
    }
  
    retrieveAll() {
      // Tu código aquí 👈
      let allValues = [];

      for (let i = 0; i < this.numBuckets; i++) {
        if (!this.buckets[i]) {
            continue;
        }

        allValues = [...allValues, this.buckets[i]];
      }

      allValues = allValues.flat(1);
      return allValues;
    }

    retrieveAllPhones() {
        // Tu código aquí 👈
        let allValues = [];
  
        for (let i = 0; i < this.numBuckets; i++) {
          if (!this.buckets[i]) {
              continue;
          }
  
          for (let j = 0; j < this.buckets[i].length; j++) {
            allValues.push(this.buckets[i][j][1])
          }
        }

        return allValues;
      }
  
    delete(name) {
      // Tu código aquí 👈
      const index = this.hash(name);

      if (this.buckets[index] === undefined) {
        return null;
      }

      const pos = this.buckets[index].findIndex((element) => element[0] === name);
      
      return pos > -1 ? this.buckets[index].splice(pos, 1)[0] : null;
    }
}

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.insert("Cat", "123-456-7891")
contactList.insert("Cat2", "123-456-7896")
contactList.insert("Cat6", "123-456-7898")
contactList.insert("Cat3", "123-466-7898")
contactList.insert("Cat5", "123-496-7898")

console.log(contactList.delete("Cat2"))
console.log(contactList.get("Cat1"))

const allPhones = contactList.retrieveAllPhones();
console.log(allPhones)

const allValues = contactList.retrieveAll();
console.log(allValues)