function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "fionalockley.fl@gmail.com",
        Password : "AnaoifPassword",
        To : 'fionalockley12@gmail.com',
        From : document.getelementByID("email").value,
        Subject : "Contact Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}

onsubmit ="sendEmail()"



