// const firebaseConfig = {
//   apiKey: "AIzaSyCDqJ1wVKHuf3uT6X17qgBF5xyOYcTMBGU",
//   authDomain: "ujamaa-e794b.firebaseapp.com",
//   databaseURL: "https://ujamaa-e794b-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "ujamaa-e794b",
//   storageBucket: "ujamaa-e794b.appspot.com",
//   messagingSenderId: "489128654974",
//   appId: "1:489128654974:web:264aaec97a4e1f8531c02f",
//   measurementId: "G-9GPZPR1H3T"
// };

// firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();

// const logInForm = document.getElementById('logInForm');

// logInForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = logInForm['email'].value;
//   const password = logInForm['password'].value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(() => {
//       alert('Login successful!');

//       window.location.href = 'members.html';
//     })
//     .catch((error) => {
//       console.error("Error signing in: ", error.message);
//       alert(error.message);
//     });
// });

function redirect () {
  window.location.href = "members.html";
}