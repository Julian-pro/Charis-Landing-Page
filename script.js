// JavaScript code to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contact-form');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
      // Prevent default form submission
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Display alert message
      alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    });
  });
  