document.addEventListener('DOMContentLoaded', function () {
    // Reference to the form
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();
       
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const subject = form.querySelector('input[name="subject"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        alert('Your message has been sent successfully!');
    
        form.reset();
    });
});

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "faatimzahra@gmail.com",
        Password : "7594A6CCB7A3A8FB57C7358BB5B9114A61BF",
        To : 'elonssry@gmail.com',
        From : Document.getElemenrById("email").value,
        Subject : "New contact",
        Body : "Name: " + Document.getElementById("name").value
             + "<br> Email: " + Document.getElementById("email").value
             + "<br> Phone: " + Document.getElementById("phone").value
             + "<br> Subject: " + Document.getElementById("subject").value
             + "<br> Message: " + Document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}
