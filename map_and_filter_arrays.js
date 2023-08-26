var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

const cheap_products = articulos.filter((product, index) => {
    console.log(`Actual product is ${product.nombre} with index: ${index}`)
    return product.costo <= 500;
})
console.log(cheap_products)

const discounted_products = articulos.map((product, index) => {
    product.costo *= 0.9
    console.log(`Product${index}: ${product.nombre} has 10% of discount`)
    return product;
})
console.log(discounted_products)
