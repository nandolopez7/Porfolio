// Get the button element by its ID
const btn = document.getElementById('button');

// Attach a submit event listener to the form
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  btn.value = 'Sending...'; // Update the button text to indicate sending

  const serviceID = 'default_service'; // Set the email service ID
  const templateID = 'template_u79rc3s'; // Set the email template ID

  // Send the form data using emailjs
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // On successful submission, update the button text and show a success message
      btn.value = 'Send Email';
      alert("Thanks for reaching me out! We'll be en touch soon.");
    }, (err) => {
      // On error, update the button text and show the error message
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
