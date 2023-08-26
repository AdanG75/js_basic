class User {
    // Tu código aquí 👈
    constructor(name, age, friends = [], messages = []) {
        this._name = name;
        this._age = age;
        this._friends = friends;
        this._messages = messages;
    }

    addFriend(friend) {
        this._friends.push(friend)
    }

    sendMessage(message, friend) {
        const foundFriend = this._friends.find(function (element) {
            if (element === friend) {
                element.receiveMessage(message)

                return true;
            } else {
                return false;
            }
        })

        if (foundFriend !== undefined) {
            this._messages.push(message)
        }
    }

    receiveMessage(message) {
        this._messages.push(message)
    }

    showMessages() {
        return this._messages;
    }

    set age(myAge) {
        if (myAge < 0) {
            throw new Error("No existen las edades negativas")
        } else {
            this._age = myAge;
        }
    }

    get age() {
        return this._age;
    }

    set name(newName) {
        if (newName === "" || newName === null) {
            throw new Error("El nombre debe tener letras")
        } else {
            this._name = newName;
        }
    }

    get name() {
        return this._name;
    }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
const usuario3 = new User("Pedro", 32);
usuario1.addFriend(usuario2);
usuario1.addFriend(usuario3);

usuario1.sendMessage("Hola Maria!", usuario2);
usuario1.sendMessage("Cómo vas Pedro!", usuario3);
usuario2.addFriend(usuario1);
usuario2.sendMessage("Hola Juan, qué tal", usuario1);

console.log(usuario1.showMessages())
console.log(usuario2.showMessages())