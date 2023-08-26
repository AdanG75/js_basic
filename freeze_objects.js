function protectDog(dog) {
    // Tu código aquí 👈
    const freezedDog = Object.assign({}, dog)
    freezeObject(freezedDog)

    return freezedDog;
}

function freezeObject(myObject) {
    Object.freeze(myObject)

    if (typeof(myObject) === "object") {
        if (Array.isArray(myObject)) {
            myObject.forEach(element => freezeObject(element))
        } else {
            for (let value in myObject) {
                freezeObject(myObject[value])
            }
        }
    }
}


let protectedDogObject = protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555", languages: ["español", "inglés"] },
    favoriteFood: ["pollito", "croquetas", {name: "filete", ingrediantes: ["carne", "aceite de oliva"]}],
    activities: ["jugar", "caminar"],
})

protectedDogObject.name = "Juan"
protectedDogObject.age = 45
protectedDogObject.owner.languages[1] = "Pelos"
protectedDogObject.favoriteFood[2].ingrediantes[0] = "huesos"

console.log(protectedDogObject)
console.log(protectedDogObject.favoriteFood[2])