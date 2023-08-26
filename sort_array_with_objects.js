function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    let sortedProducts = products.slice();

    sortedProducts
        .sort((a, b) => b.inStock - a.inStock || a.price - b.price);

    return sortedProducts;
}

const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
];

const result = sortByAvailabilityAndPrice(products)

console.log(result)
console.log(products)