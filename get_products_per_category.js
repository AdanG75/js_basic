function groupProducts(products, category) {
    // Tu código aquí
    let productsString = "";
    let totalProducts = 0;

    products.forEach(element => {
        if (element.category === category) {
            productsString += `${element.name}, `
            totalProducts += element.price
        }
    });

    if (productsString !== "") {
        productsString = productsString.slice(0, productsString.length - 2)
    }

    return {
        products: productsString,
        totalPrice: totalProducts
    }
  }

  const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
  ];
  
  const result = groupProducts(products, "Food")
  console.log(result)