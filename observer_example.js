class Subscriber {
    // Tu código aquí 👈
    constructor(email) {
        this.email = email;
    }

    receive(article) {
        const result = `El suscriptor ${this.email} ha recibido el artículo: ${article.title}`;
        console.log(result);

        return result;
    }
}

class Newsletter {
    // Tu código aquí 👈
    constructor(subscribers = [] ) {
        this.subscribers = subscribers;
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
        console.log("Nuevo suscriptor añadido")

        return "Nuevo suscriptor añadido"
    }

    unsubscribe(email) {
        const indexOfSubscriber = this.subscribers.findIndex((element) => element.email === email);

        if (indexOfSubscriber > -1) {
            this.subscribers.splice(indexOfSubscriber, 1)
            console.log(`Usuario con email ${email} eliminado`)
        } else {
            console.log(`Usuario con email ${email} no encontrado`)
        }
    }

    post(article) {
        this.subscribers.forEach((element) => element.receive(article))
    }
}


const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);
