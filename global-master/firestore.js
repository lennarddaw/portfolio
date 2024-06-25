
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDataBase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDEgc0IauG8-U3I-pk9NW69jq1k32uxr00",
    authDomain: "portfolio-website-46c63.firebaseapp.com",
    databaseURL: "https://portfolio-website-46c63-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-website-46c63",
    storageBucket: "portfolio-website-46c63.appspot.com",
    messagingSenderId: "910679177374",
    appId: "1:910679177374:web:c878472f01a01223be238f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDataBase(app);

  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    set(ref(db, 'user/' + document.getElementById('name').value),
    {
        username: document.getElementById('name').value,
        email: document.getElementById('email').value
    });
    alert('Data send!')
  })