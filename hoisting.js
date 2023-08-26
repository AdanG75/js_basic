var myName;
console.log(myName)
myName = "Name"

let arrayObjects = [
    {
        name: "Mimi",
        followers: [320, 120, 70]
    },
    {
        name: "Milo",
        followers: [400, 300, 100, 200]
    },
    {
        name: "Gizmo",
        followers: [250, 750]
    }
] 


console.log(Number("48"))
console.log(String(false))
console.log(Boolean(""))
console.log(arrayObjects[0].followers.reduce(
    function(aux, number) {
        return aux + number;
    }, 0
))

function getFamousCat(cats) {
    let mostFamousValue = -1;
    let famousCats = []

    for (const cat of cats) {
        let totalFollowers = cat.followers.reduce(
            function(aux, number) {
                return aux + number;
            }, 0
        )

        if (totalFollowers > mostFamousValue) {
            mostFamousValue = totalFollowers
            famousCats = [cat.name]
        } else if (totalFollowers === mostFamousValue) {
            famousCats.push(cat.name)
        } else {
            continue;
        }
    }

    return famousCats
}

function getAverageOfFollowers(cats) {
    for (const cat of cats) {
        const averageForEachCat = cat.followers.reduce(
            function(aux, number) {
                return aux + number;
            }, 0
        ) / cat.followers.length

        console.log(averageForEachCat)
    }

    return null;
}

console.log(getFamousCat(arrayObjects))
console.log(getAverageOfFollowers(arrayObjects))
