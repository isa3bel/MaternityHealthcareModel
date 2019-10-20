(function () {

  const firebaseConfig = {
    apiKey: "AIzaSyDvd_eoDzq1G8Gq24zurY5JudX99c4Rhu0",
    authDomain: "maternityhealthcaremodel.firebaseapp.com",
    databaseURL: "https://maternityhealthcaremodel.firebaseio.com",
    projectId: "maternityhealthcaremodel",
    storageBucket: "maternityhealthcaremodel.appspot.com",
    messagingSenderId: "169817253026",
    appId: "1:169817253026:web:753512b7881dbad4f963fb",
    measurementId: "G-NFGGJ0XLXF"
  };
  
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  var submit = document.getElementById('submitBtn');


  submit.addEventListener('click', e => {
    // Add a new document in collection "cities"
    db.collection("Patients").doc().set({
      firstName: document.getElementById('fname').value,
      lastName: document.getElementById('lname').value,
      dateOfBirth: document.getElementById('dob').value,
      numberOfPregnancies: document.getElementById('noPreg').value,
      gestationalAge: document.getElementById('gestAge').value,
      condition: document.getElementById('condition').value,
      prescription: document.getElementById('prescription').value,
      nextApt: document.getElementById('nextApt').value,
      comments: document.getElementById('comments').value, 
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

    

  });

}());