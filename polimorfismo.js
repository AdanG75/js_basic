class Pay {
    // Tu código aquí 👈
    makePay(amount) {
      return {
        "realized": true,
        "quantity": amount
      };
    }
}

class PayPal extends Pay {
    // Tu código aquí 👈
    constructor(email) {
      super()
      this.platform = "PayPal";
      this.email = email;
    }
  
    makePay(quantity) {
      return {
        ...super.makePay(quantity),
        "platform": this.platform,
        "email": this.email,
      };
    }
}

class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber) {
        super()
        this.cardNumber = cardNumber;
    }
  
    makePay(quantity) {
      const ncLength = this.cardNumber.length;
      if (ncLength === 16) {
        return {
          ...super.makePay(quantity),
          "lastCardNumbers": this.cardNumber.substring(ncLength - 4, ncLength)
        };
      } else {
        throw new Error("Longitudde tarjeta no valido")
      }
    }
}

class Cash extends Pay {
    // Tu código aquí 👈
}


function processPay(method, quantity) {
    // Tu código aquí 👈
    return method.makePay(quantity)
}

const card = new Card("4913478952471122")
const paypal = new PayPal("test@mail.com")
const cash = new Cash()

console.log(processPay(cash, 400))
console.log(processPay(paypal, 240))
console.log(processPay(card, 100))