function searchValue(array, value) {
    // Tu código aquí 👈
    for (let i = 0; i < array.length; i++) {
        const rowLength = array[i].length
        for (let j = 0; j < rowLength; j++) {
            if (value == array[i][j]) {
                return {
                    row: i,
                    column: j
                }
            } else {
                continue;
            }
        }
    }

    throw new Error("Valor no encontrado")
}

const array = [
    [1, 2, 3, 14, 17],
    [4, 5, 6],
    [7, 8, 9, 0, -1, 64, 21],
  ];
  
const value = 21;

const result = searchValue(array, value);

console.log(result)