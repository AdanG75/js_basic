function printTriangle(size, character) {
    // Tu código aquí 👈
    var triangle = ""
    if (size == 1) {
      return character
    }

    for (let i = 1; i <= size; i++) {
      for (let j = 0; j < (size - i); j++) {
        triangle += " "
      }

      for (let j = 0; j < i; j++) {
        triangle += character
      }

      if (i != size) {
        triangle += "\n"
      }
    }
  
    return triangle
}

console.log(printTriangle(10, "#"))