function myMap(anArray, func) {
    let returnArray = []
    for (let i = 0; i < anArray.length; i++) {
        returnArray.push(func(anArray[i]))
    }

    return returnArray
}

console.log(myMap([1,2,3,4,5], (number) => number * 2))
console.log(myMap(
        [
            {name: "michi", age: 2},
            {name: "firulais", age: 6}
        ],
        (pet) => pet.name
    )
)