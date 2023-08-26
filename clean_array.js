/*
En este desafío deberás remover los elementos duplicados de un array.

La función removeDuplicates recibirá un array con elementos que pueden ser números o 
strings y que contienen elementos repetidos. Tu objetivo es implementar la lógica necesaria 
para quitar estos elementos repetidos y mantener el orden original de aparición de los 
elementos en el array.
*/
function removeDuplicates(values) {
    // Tu código aquí 👈
    return [...new Set(values)]
}

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];
const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))
console.log(removeDuplicates(fruits))