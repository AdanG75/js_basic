function Auto(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.show_details = function() {
        console.log(`Details: \n\tBrand: ${this.brand}\n\tModel: ${this.model}\n\tYear: ${this.year}`)
    }
}

let response = 'y';
let cars = [];
while (response.toLowerCase() !== 'n') {
    const brand = prompt("Write the car's brand");
    const model = prompt("Write the car's model");
    const year = prompt("Write the car's year");

    let car = new Auto(brand, model, year);
    cars.push(car)
    
    response = prompt("Do you wish add another car (Y/N)");
}


cars.forEach((car) => car.show_details())