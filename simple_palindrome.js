let myString = "racecar"

function reverseString(aString) {
    let arrayString = []

    for (let i = (aString.length - 1); i >= 0; i--) {
        arrayString.push(aString[i])
    }

    return arrayString.join("");
}

console.log(reverseString(myString))