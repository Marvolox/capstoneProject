const firebaseConfig = {
    apiKey: "AIzaSyCDqJ1wVKHuf3uT6X17qgBF5xyOYcTMBGU",
    authDomain: "ujamaa-e794b.firebaseapp.com",
    projectId: "ujamaa-e794b",
    storageBucket: "ujamaa-e794b.appspot.com",
    messagingSenderId: "489128654974",
    appId: "1:489128654974:web:264aaec97a4e1f8531c02f",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    const newUserRef = database.ref('users').push();
    
    newUserRef.set({
      name: name,
      email: email,
      password: password
    })
    .then(() => {
      console.log('User signed up successfully!');

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('confirmPassword').value = '';
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
  };

  document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
  