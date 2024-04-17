// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDqJ1wVKHuf3uT6X17qgBF5xyOYcTMBGU",
  authDomain: "ujamaa-e794b.firebaseapp.com",
  databaseURL: "https://ujamaa-e794b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ujamaa-e794b",
  storageBucket: "ujamaa-e794b.appspot.com",
  messagingSenderId: "489128654974",
  appId: "1:489128654974:web:264aaec97a4e1f8531c02f",
  measurementId: "G-9GPZPR1H3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signupForm['name'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  const confirmPassword = signupForm['confirmPassword'].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      db.ref('users/' + userId).set({
        name: name,
        email: email
      }).then(() => {
        alert('Sign up successful!');
        window.location.href = 'members.html';
      }).catch((error) => {
        console.error("Error adding user data: ", error);
        alert("Error adding user data: " + error.message);
      });
    })
    .catch((error) => {
      console.error("Error creating user: ", error.message);
      alert(error.message);
    });
});
