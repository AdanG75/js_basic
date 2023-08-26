function add(a, b) {
    return a + b;
}

var anonymousFunction = function(a, b) {
    return a + b;
}

var anonymousConcatText = function(textA, textB) {
    return textA + textB;
}

function concatText(textA, textB) {
    return `Uniendo texto: ${textA} - ${textB}`
}

console.log(add(45, 12))
console.log(anonymousFunction(7, 56))
console.log(concatText("Perro", 45))
console.log(anonymousConcatText("Hola ", "Mundo"))