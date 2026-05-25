/**
 * Spark Firebase Configuration
 * 
 * To activate permanent cloud synchronization:
 * 1. Create a free Firebase project at: https://console.firebase.google.com/
 * 2. Add a Web App, copy your config object below, and set configActive to true.
 * 3. Add Firestore Database inside your Firebase Console and enable reads/writes.
 */

window.firebaseConfigured = false; // Toggle to true to connect to the cloud!

window.firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
