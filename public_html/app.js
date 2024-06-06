/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const firebaseConfig = {
  apiKey: "AIzaSyAQck6EqKmYIIdQPxp3lxVL9zC82zW26cY",
  authDomain: "sudanesewhatsup.firebaseapp.com",
  databaseURL: "https://sudanesewhatsup.firebaseio.com",
  projectId: "sudanesewhatsup",
  storageBucket: "sudanesewhatsup.appspot.com",
  messagingSenderId: "357549375299",
  appId: "1:357549375299:web:2632d474e1b372cb8779f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the Firebase database
var database = firebase.database();

// Get the contact form
var contactForm = document.getElementById('contactForm');

// Listen for form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  var name = contactForm.elements['name'].value;
  var email = contactForm.elements['email'].value;
  var message = contactForm.elements['message'].value;

  // Save form data to the database
  database.ref('contacts').push({
    name: name,
    email: email,
    message: message
  })
  .then(function() {
    // Clear form fields
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
  })
  .catch(function(error) {
    console.error('Error writing to database:', error);
    alert('Oops! An error occurred. Please try again later.');
  });
});


