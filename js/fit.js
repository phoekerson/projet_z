
const form = document.querySelector('form');
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `name : ${name.value} <br> Email: ${email.value} <br> phone: ${phone.value} <br>subject: ${subject.value}  <br> message: ${message.value}`;
            Email.send({
            SecureToken : "9f3e9f78-453b-4d3b-a7f8-b5eadc4a2536",
            Host : "smtp.elasticemail.com",
            Username : "webcreateplus@gmail.com",
            Password : "00B20E5D38EF88C683597AE685322094183C",
            To : 'webcreateplus@gmail.com',
            From : "mintoumbacaleb@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Succes",
                    text: "Formulaire de coaching envoyé avec succès",
                    icon: "success"
                  });
            }
          }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        sendEmail();
    })