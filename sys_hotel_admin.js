function hotelSystem(rooms) {
    // Tu código aquí
    const yearReservation = 2024;

    const roomsNumbers = new Array(rooms);
    for (let i = 1; i <= rooms; i++) {
        roomsNumbers[i - 1] = i;
    }
    
    let reservations = [];

    return {
        searchReservation(id) {
            const reservation = reservations.find((element) => element.id === id)

            if (reservation === undefined) {
                throw new Error("La reservación no fue encontrada")
            }

            return reservation
        },
        getSortReservations() {
            let sortedReservationByCheckIn = reservations.slice();

            sortedReservationByCheckIn.sort(function(a, b) {
                const [aDay, aMonth] = a.checkIn.split("/");
                const [bDay, bMonth] = b.checkIn.split("/");

                const aDate = new Date(yearReservation, Number(aMonth) - 1, Number(aDay));
                const bDate = new Date(yearReservation, Number(bMonth) - 1, Number(bDay));

                return aDate.valueOf() - bDate.valueOf();
            })

            return sortedReservationByCheckIn;
        },
        addReservation(reservation) {
            if (roomsNumbers.find((element) => element === reservation.roomNumber) === undefined) {
                throw new Error("La habitación no existe");
            }

            const reservationPerRoom = reservations.filter(element => element.roomNumber === reservation.roomNumber);

            const [inputDateIn, inputDateOut] = validateDates(reservation.checkIn, reservation.checkOut, yearReservation);

            for (let i = 0; i < reservationPerRoom.length; i++) {
                const element = reservationPerRoom[i];

                const isRoomAvailable= validateCheckInAndCheckOut(
                    element.checkIn, element.checkOut, inputDateIn, inputDateOut, yearReservation
                )

                if (!isRoomAvailable) {
                    throw new Error("La habitación no está disponible")
                }
            }
            reservations.push(reservation)
            // console.log("Reservacion añadida")
        },
        removeReservation(id) {
            const indexToRemove = reservations.findIndex(element => element.id === id);

            if (indexToRemove > -1) {
                return reservations.splice(indexToRemove, 1);
            } else {
                throw new Error("La reservación que se busca remover no existe")
            }
        },
        getReservations() {
            return reservations;
        },
        getAvailableRooms(checkIn, checkOut) {
            const [inputDateIn, inputDateOut] = validateDates(checkIn, checkOut, yearReservation);
            let occupiedRooms = [];


            for (let i = 0; i < reservations.length; i++) {
                const element = reservations[i];

                if (occupiedRooms.find(item => item === element.roomNumber) === undefined) {
                    const isRoomAvailable = validateCheckInAndCheckOut(
                        element.checkIn, element.checkOut, inputDateIn, inputDateOut, yearReservation
                    )

                    if (!isRoomAvailable) {
                        occupiedRooms.push(element.roomNumber)
                    }
                } else {
                    continue;
                } 
            }

            return roomsNumbers.filter((item) => !occupiedRooms.includes(item))
        }
    }
}


function validateCheckInAndCheckOut(currentCheckIn, currentCheckOut, inputCheckIn, inputCheckOut, yearReservation) {
    const [currentDayIn, currentMonthIn] = currentCheckIn.split("/");
    const [currentDayOut, currentMonthOut] = currentCheckOut.split("/");

    const currentTimestampIn = new Date(yearReservation, Number(currentMonthIn) - 1, Number(currentDayIn)).valueOf();
    const currentTimestampOut = new Date(yearReservation, Number(currentMonthOut) - 1, Number(currentDayOut)).valueOf();
    const inputTimestampIn = inputCheckIn.valueOf();
    const inputTimestampOut = inputCheckOut.valueOf();

    // Check if room is occupied
    // return (currentTimestampIn <= inputTimestampIn && currentTimestampOut >= inputTimestampIn) ||
    //     (currentTimestampIn <= inputTimestampOut && currentTimestampOut >= inputTimestampOut) ||
    //     (currentTimestampIn >= inputTimestampIn && currentTimestampOut <= inputTimestampOut); 

    // Check if room is available
    return currentTimestampIn > inputTimestampOut || currentTimestampOut < inputTimestampIn
}

function validateDates(inputCheckIn, inputCheckOut, yearReservation) {
    const [inputDayIn, inputMonthIn] = inputCheckIn.split("/");
    const [inputDayOut, inputMonthOut] = inputCheckOut.split("/");

    const dayIn = Number(inputDayIn);
    const monthIn = Number(inputMonthIn) - 1;
    const dayOut = Number(inputDayOut);
    const monthOut = Number(inputMonthOut) - 1;

    // console.log(`Año:${yearReservation}, Mes: ${monthIn}, Día: ${dayIn}`)

    const inputDateIn = new Date(yearReservation, monthIn, dayIn);
    const inputDateOut = new Date(yearReservation, monthOut, dayOut);

    const isValidDayIn = (inputDateIn.getMonth() === monthIn) || (inputDateIn.getDate() === dayIn) || (inputDateIn.getFullYear() === yearReservation);
    const isValidDayOut = (inputDateOut.getMonth() === monthOut) || (inputDateOut.getDate() === dayOut) || (inputDateOut.getFullYear() === yearReservation);

    if (isValidDayIn && isValidDayOut) {
        if (inputCheckIn.valueOf() > inputCheckOut.valueOf()) {
            throw new Error("La fecha de ingreso debe estar antes de la fecha de salida.") 
        }

        return [
            inputDateIn,
            inputDateOut
        ]
    } else {
        throw new Error("Fecha no valida")
    }
}

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
    id: 2,
    name: "Pepe Doe",
    checkIn: "06/01",
    checkOut: "09/01",
    roomNumber: 7,
});

hotel.addReservation({
    id: 3,
    name: "Felipe Doe",
    checkIn: "06/02",
    checkOut: "08/03",
    roomNumber: 7,
});

hotel.addReservation({
    id: 4,
    name: "Felipe Doe",
    checkIn: "09/02",
    checkOut: "10/02",
    roomNumber: 2,
});

hotel.addReservation({
    id: 5,
    name: "Felipe Doe",
    checkIn: "07/01",
    checkOut: "16/01",
    roomNumber: 2,
});

hotel.addReservation({
    id: 6,
    name: "Felipe Doe",
    checkIn: "04/01",
    checkOut: "10/01",
    roomNumber: 3,
});

hotel.addReservation({
    id: 7,
    name: "Felipe Doe",
    checkIn: "01/01",
    checkOut: "05/01",
    roomNumber: 4,
});


// console.log(hotel.getSortReservations())
// console.log(hotel.searchReservation(6))
// console.log(hotel.removeReservation(6))
// console.log(hotel.getReservations())
console.log(hotel.getAvailableRooms("05/01", "12/01"))



