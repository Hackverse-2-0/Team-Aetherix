// signup.js
// Handles user registration and stores user in Firebase Auth
// Make sure to include Firebase SDK in your HTML before this script

// TODO: Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA7u4o9M8zwj23V_FOjmBAkfmVr-7dnejk",
    authDomain: "goldenfield2.firebaseapp.com",
    projectId: "goldenfield2",
    storageBucket: "goldenfield2.firebasestorage.app",
    messagingSenderId: "28910909130",
    appId: "1:28910909130:web:7d60f3c595271f3ec8a633",
    measurementId: "G-CVJ5D0MWEY"
  };

// Initialize Firebase
if (typeof firebase === 'undefined') {
    alert('Firebase SDK not loaded!');
} else {
    firebase.initializeApp(firebaseConfig);
}

async function signupWithFirebase(email, password, name, mobile, state, company) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        // Optionally, store additional user info in Firestore
        await firebase.firestore().collection('users').doc(user.uid).set({
            name,
            email,
            mobile,
            state,
            company,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Example usage: Call this from your registration form handler
// signupWithFirebase(email, password, name, mobile, state, company).then(...);
