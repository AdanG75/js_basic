/*
En este desafío, tu objetivo es implementar una singly linked list para almacenar información 
sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los 
siguientes campos:

    Nombre del paciente (string)
    Edad del paciente (number)
    Número de cama asignada al paciente (number)

La lista deberá tener los siguientes métodos:

    addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama 
                           disponible. Si no hay camas disponibles, debe lanzar un error con 
                           el mensaje "No hay camas disponibles".

    removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su 
                         cama. Si el paciente no se encuentra en la lista, debe lanzar un error 
                         con el mensaje "Paciente no encontrado".

    getPatient(name): retorna la información del paciente con el nombre especificado en el 
                      siguiente formato { name, age, bedNumber }. Si el paciente no se encuentra 
                      en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

    getPatientList(): retorna una lista con la información de todos los pacientes en la lista, 
                      cada paciente deberá tener el siguiente formato { name, age, bedNumber }.

    getAvailableBeds(): retorna un número con el total de camas disponibles.

*/

class Node {
    constructor(name, age, bedNumber) {
      // Tu código aquí 👈🏻
      this.name = name;
      this.age = age;
      this.bedNumber = bedNumber;
      this.nextPatient = null;
    }
}


class PatientList {
    constructor(beds = 1) {
      // Tu código aquí 👈🏻
      this.beds = beds;
      this.head = null;
      this.tail = null;

      let availableBeds = []
      for (let i = 0; i < beds; i++) {
        availableBeds.push(true)
      }
      this.availableBeds = availableBeds;
    }

    getAvailableBed() {
        const bed = this.availableBeds.findIndex((element) => element === true);

        if (bed < -1) {
            throw new Error("No hay camas disponibles")
        }

        this.availableBeds[bed] = false;
        return bed + 1;
    }
  
    addPatient(name, age) {
      // Tu código aquí 👈🏻
      if (this.beds < 1) {
        throw new Error("No hay camas disponibles")
      }

      const bed = this.getAvailableBed();
      const newPatient = new Node(name, age, bed)
      if (!this.head) {
        this.head = newPatient;
        this.tail = newPatient;
      } else {
        this.tail.nextPatient = newPatient;
        this.tail = newPatient;
      }

      return --this.beds;
    }
  
    removePatient(name) {
      // Tu código aquí 👈🏻
      if (this.head.name === name) {
        // free the bed
        this.availableBeds[this.head.bedNumber - 1] = true;
        ++this.beds;
        // remove de patient
        this.head = this.head.nextPatient;

        return this.beds;
      } else {
        let actualPatient = this.head;

        while (actualPatient.nextPatient) {
            if (actualPatient.nextPatient.name === name) {
                // free the bed
                this.availableBeds[actualPatient.nextPatient.bedNumber - 1] = true;
                ++this.beds;
                // remove de patient
                actualPatient.nextPatient = actualPatient.nextPatient.nextPatient;

                if (!actualPatient.nextPatient) {
                    this.tail = actualPatient
                }

                return this.beds;
            } else {
                actualPatient = actualPatient.nextPatient;
            }
        }
      }

      throw new Error("Paciente no encontrado")
    }
  
    getPatient(name) {
      // Tu código aquí 👈🏻
      let patient = null;

      if (this.head.name === name) {
        patient = this.head;
      } else if (this.tail.name === name) {
        patient = this.tail;
      } else {
        let actualPatient = this.head.nextPatient;

        while (actualPatient.nextPatient) {
            if (actualPatient.name === name) {
                patient = actualPatient;

                break;
            } else {
                actualPatient = actualPatient.nextPatient;
            }
        }
      }

      if (!patient) {
        throw new Error("Paciente no encontrado")
      } else {
        return {
            name: patient.name, 
            age: patient.age, 
            bedNumber: patient.bedNumber,
        }
      }
    }
  
    getPatientList() {
      // Tu código aquí 👈🏻
      let listOfPatients = [];

      let actualPatient = this.head;
      while (actualPatient) {
        listOfPatients.push({
            name: actualPatient.name, 
            age: actualPatient.age, 
            bedNumber: actualPatient.bedNumber,
        })
        actualPatient = actualPatient.nextPatient;
      }

      return listOfPatients;
    }
  
    getAvailableBeds() {
      // Tu código aquí 👈🏻
      return this.beds;
    }
}


const list = new PatientList(5)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 31)
list.addPatient("Paciente 4", 32)
list.addPatient("Paciente 5", 33)

list.removePatient("Paciente 5")
list.removePatient("Paciente 2")
list.addPatient("Paciente 6", 28)
list.removePatient("Paciente 1")
list.addPatient("Paciente 7", 25)

const patients = list.getPatientList()
console.log(patients)
console.log(list.getAvailableBeds())
console.log(list.head)
console.log(list.tail)

