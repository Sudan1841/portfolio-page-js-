/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const firebaseConfig = {
    apiKey: "AIzaSyAfLzg5Aeua0dA2TeWRAgslgyBXAeIzows",
    authDomain: "my-project-1562563201095.firebaseapp.com",
    databaseURL: "https://my-project-1562563201095.firebaseio.com",
    projectId: "my-project-1562563201095",
    storageBucket: "my-project-1562563201095.appspot.com",
    messagingSenderId: "212338060009",
    appId: "1:212338060009:web:ab28b665b26dd420e65e78",
    measurementId: "G-4ZLTP15DPZ"
  };
  
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

