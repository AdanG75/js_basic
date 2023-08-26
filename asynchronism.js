function sendEmail(email, subject, body) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
        if (email && subject && body) {
            setTimeout(() => {
                // Código aquí
                resolve({
                    "email": email,
                    "subject": subject,
                    "body": body
                })
            }, 1000);
        } else {
            reject(new Error("Missing value!"))
        }
    });
}

sendEmail(
    "mail@email.com", 
    "Important e-mail", 
    "This is a very important email."
).then( (result) => {
    console.log(result)
}).catch( (error) => {
    console.log(error.message)
});

