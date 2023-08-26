class Animal {
    // Tu código aquí 👈
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getInfo() {
        return {
            "name": this.name,
            "age": this.age,
            "species": this.species
        };
    }
}
  
class Mammal extends Animal {
    // Tu código aquí 👈
    constructor(name, age, species, hasFur) {
        super(name, age, species)
        this.hasFur = hasFur;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            "hasFur": this.hasFur
        };
    }
}
  
class Dog extends Mammal {
    // Tu código aquí 👈
    constructor(name, age, species, hasFur, breed = null) {
        super(name, age, species, hasFur)
        if (breed == null) {
            this.breed = species;
        } else {
            this.breed = breed;
        }
    }

    getInfo() {
        return {
            ...super.getInfo(),
            "breed": this.breed
        };
    }

    bark() {
        return "woof!"
    }
}
  
const bird = new Animal("pepe", 1, "bird")
console.log(bird.getInfo())

const hippo = new Mammal("bartolo", 3, "hippo", false)
console.log(hippo.getInfo())

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark())