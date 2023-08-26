function arrayModified() {
    // Tu código aquí 👈
}

const numeros = [1, 2, 3, 4, 5];

Array.prototype.suma = function() { return this.reduce((a, b) => a + b); }
console.log(numeros.suma()); 

Array.prototype.printElement = function() {console.log(this)}
numeros.printElement()

Array.prototype.myFilter = function(operation) {
    let toReturn = [];
    for (let i = 0; i < this.length; i++) {
        if (operation(this[i])) {
            toReturn.push(this[i])
        }
    }

    return toReturn;
}

const result = numeros.myFilter(number => number % 2 === 0)
console.log(result)
