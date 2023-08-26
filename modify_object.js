function processShoppingList(list) {
    // Tu código aquí 👈
    const discount = 0.8; // 20% off
    let total = 0;

    list.forEach(element => {
        let pricePerProduct = element.price * element.quantity;

        if (element.name.search(/oferta/i) > -1) {
            pricePerProduct *=  discount;
        }

        element.price = pricePerProduct;
        delete element.quantity

        total += pricePerProduct;
    });

    return total;
}

const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ]
  
const result = processShoppingList(shoppingList);

console.log(result)
console.log(shoppingList)