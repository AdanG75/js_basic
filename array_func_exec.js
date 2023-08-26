function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    const isDataCompleted = formData.hasOwnProperty("name") && formData.hasOwnProperty("lastname") && 
                formData.hasOwnProperty("email") && formData.hasOwnProperty("password");
    
    if (isDataCompleted) {
        if (registeredUsers.every((element) => element.email !== formData.email)) {
            let objectToAdd = {}
            const objectKeys = Object.keys(formData);
            
            objectKeys.forEach((element => {
                if (element !== "password") {
                    objectToAdd[element] = formData[element]
                }
            }))

            registeredUsers.push(objectToAdd)
            console.log("Tu registro fue exitoso")
            return "Tu registro fue exitoso"
        } else {
            throw new Error("Email existente, favor de seleccionar otro");
        }
    } else {
        throw new Error("Faltan los siguientes campos: name, email, etc...");
    }
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]

  validateForm(formData, registeredUsers)
  
 const formData1 = {
    name: "Vanessa",
    lastname: "Archundia",
    email: "vanessa@example.com",
    password: "123456"
  }
  validateForm(formData1, registeredUsers)


 const formData2 = {
    name: "Anlly",
    lastname: "Galicia",
    email: "anlly@example.com",
    password: "123456"
  }
  validateForm(formData2, registeredUsers)

  console.log(registeredUsers)