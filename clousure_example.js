function createCalculator() {
    // Tu código aquí 👈
    let baseValue = 0
    
    return {
        add(number) {
            baseValue += number
            return baseValue
        },
        subtract(number) {
            baseValue -= number
            return baseValue
        },
        multiply(number) {
            baseValue *= number
            return baseValue
        },
        divide(number) {
            baseValue /= number
            return baseValue
        },
        clear() {
            baseValue = 0
            return baseValue
        },
        getTotal() {
            return baseValue
        }
    }
}

const calculator = createCalculator()

console.log(calculator.add(10))
console.log(calculator.add(15))
console.log(calculator.subtract(-10))
console.log(calculator.getTotal())
console.log(calculator.divide(5))