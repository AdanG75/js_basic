// En este desafío crearas un Sistema de reservaciones de vuelos.

// Tendrás que implementar la lógica de las siguientes clases con las 
// siguientes características (cada clase tiene su propio archivo dentro del coding playground)

//     Flight: permite crear vuelos regulares con los atributos 
//             origin (origen), destination (destino), date (fecha de salida), 
//             capacity (capacidad máxima), price (precio) e inicilizará una variable llamada 
//             passengers la cual será el array donde almacenaremos a los pasajeros (con los 
//             atributos de fullName y age por cada pasajero). Además, incluirá el método 
//             sellTicket(passenger) para vender un boleto a un pasajero específico siempre 
//             y cuando la capacidad sea mayor a cero. Este método agregará al pasajero a la 
//             lista de pasajeros del avión y a su vez agregará el vuelo a la lista de vuelos 
//             del pasajero. La función devolverá un objeto reservation.
class Flight {
    constructor(origin, destination, date, capacity, price) {
      // Tu código aquí 👈
      this.origin = origin;
      this.destination = destination;
      this.date = date;
      this.capacity = capacity;
      this.price = price;
      this.passengers = [];
      this.availability = capacity;
    }
  
    sellTicket(passenger) {
      // Tu código aquí 👈
      if (this.availability > 0) {
        try {
            this.addPassenger(passenger)
            this.availability -= 1;

            return new Reservation(this, passenger)
        } catch {
            throw new Error("Error al comprar un boleto")
        }
      } else {
        throw new Error("No hay asientos disponibles")
      }

    }

    addPassenger(passenger) {
        const newPassenger = {
            "fullName": `${passenger.name} ${passenger.lastName}`,
            "age": passenger.age,
        }
        this.passengers.push(newPassenger)
        passenger.addFlight(this)

        console.log("Nuevo pasajero agregado")
        return newPassenger;
    }
}

//     Passenger: cada pasajero tendrá los atributos name (nombre), lastName (apellido) y age (edad) 
//                y se inicializará con una lista de vuelos (flights) vacía. Cada que se agregue un 
//                vuelo a dicha lista, solo deberán agregarse las siguientes propiedades: origin, 
//                destination, date y price.
class Passenger {
    // Tu código aquí 👈
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.flights = [];
    }

    addFlight(flight) {
        const newFlight = {
            "origin": flight.origin,
            "destination": flight.destination,
            "date": flight.date,
            "price": flight.price
        }
        this.flights.push(newFlight)

        return newFlight;
    }
}

//     Reservation: aceptará un objeto flight y un objeto passenger, e incluirá el método 
//                  reservationDetails() que devolverá un objeto con los detalles de la 
//                  reservación, incluyendo origin, destination, date y reservedBy 
//                  (nombre completo del pasajero).
class Reservation {
    constructor(flight, passenger) {
      // Tu código aquí 👈
      this.flight = flight;
      this.passenger = passenger;
    }
  
    reservationDetails() {
      // Tu código aquí 👈
      return {
        "origin": this.flight.origin,
        "destination": this.flight.destination,
        "date": this.flight.date,
        "reservedBy": `${this.passenger.name} ${this.passenger.lastName}`,
      };
    }
} 

//     PremiumFlight: extenderá de la clase Flight y agregará la propiedad specialService que 
//                    será un costo adicional al precio del vuelo dentro del método 
//                    sellTicket(passenger).
class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
      // Tu código aquí 👈 
      super(origin, destination, date, capacity, price);
      this.specialService = specialService;
      this.basePrice = price;
      this.specialPrice = price + specialService;
    }
  
    sellTicket(passenger) {
      // Tu código aquí 👈
      this.price = this.specialPrice;
      const result = super.sellTicket(passenger);
      this.price = this.basePrice;

      return result
    }
}

//     EconomicFlightde: igual manera, extenderá de la clase Flight y aplicará un descuento 
//                       del 20% dentro del método sellTicket(passenger) para los pasajeros 
//                       con una edad menor a 18 años o mayor a 65 años.
class EconomicFlight extends Flight {

    constructor(origin, destination, date, capacity, price) {
        super(origin, destination, date, capacity, price);
        const DICOUNT = 0.8  // 20%

        this.basePrice = price;
        this.specialPrice = price * DICOUNT;
    }

    sellTicket(passenger) {
      // Tu código aquí 👇
      const DISCOUNT_YOUNGER_AGE = 17;
      const DISCOUNT_OLDER_AGE = 66;

      if (passenger.age <= DISCOUNT_YOUNGER_AGE || passenger.age >= DISCOUNT_OLDER_AGE) {
        this.price = this.specialPrice;
      } else {
        this.price = this.basePrice;
      }
      
      const result = super.sellTicket(passenger);
      this.price = this.basePrice;

      return result;
    }
}

const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const flight2 = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);

const passenger = new Passenger("Juan", "Perez", 30);
const passenger2 = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);
const reservation2 = flight2.sellTicket(passenger2);
const reservation3 = flight.sellTicket(passenger2)

console.log(passenger.flights)
console.log(flight.passengers)
  
console.log(reservation2.flight.price)
console.log(passenger2.flights)