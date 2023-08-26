/*
Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:

    1. Genera las variables correspondientes
    2. Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
    3. Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.
*/
const OPTIONS = {
    "piedra": 0,
    "papel": 1,
    "tijera": 2
};


function piedraPapelOTijera(userOpt, computerOpt) {
    console.log(`\n\nTu elegiste ${userOpt} y la CPU eligió ${computerOpt}`)
    if (OPTIONS[userOpt] === OPTIONS[computerOpt]) {
        return "Es empate";
    } else {
        if (((OPTIONS[userOpt] + 1) % 3) === OPTIONS[computerOpt]) {
            return "Perdiste";
        } else {
            return "Ganaste";
        }
    }
}


function computerChoice() {
    const keys = Object.keys(OPTIONS)
    return keys[ keys.length * Math.random() << 0];
}

const computerOpt = computerChoice()
const result = piedraPapelOTijera("papel", computerOpt)
console.log("\n" + result)

