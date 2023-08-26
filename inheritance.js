class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
}

class Article extends Product {
    // Tu código aquí 👈
    addToCart() {
        try {
            return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
        } catch {
            super.addToCart()
        }
    }
}
  
class Service extends Product {
    // Tu código aquí 👈
    addToCart() {
        try {
            return `Agregando el servicio ${this.name} al carrito`
        } catch {
            super.addToCart()
        }
    }
}
  
class Cart {
    // Tu código aquí 👈
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const addToCartResult = product.addToCart();
        this.products.push(product)
        
        console.log(addToCartResult)
        return addToCartResult;
    }

    deleteProduct(product) {
        const indexProduct = this.products.findIndex((element) => element.name === product.name)

        if (indexProduct > -1) {
            this.products.splice(indexProduct, 1)

            return `Producto ${product.name} eliminado`
        } else {
            return `No se encontro el producto: ${product.name}`
        }
    }

    calculateTotal() {
        if (this.products.length > 0) {
            return this.products.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
        } else {
            return 0;
        }
    }

    getProducts() {
        return this.products;
    }
}


const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.deleteProduct(book);
console.log(cart.calculateTotal());