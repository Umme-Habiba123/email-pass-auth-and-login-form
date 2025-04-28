// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm0HMQfuWPitcY2pd7WmW1hHaIslhoSv0",
  authDomain: "explore-email-password-a-9a820.firebaseapp.com",
  projectId: "explore-email-password-a-9a820",
  storageBucket: "explore-email-password-a-9a820.firebasestorage.app",
  messagingSenderId: "782401458275",
  appId: "1:782401458275:web:5bfa59e6b557d27b33e856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);