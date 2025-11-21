// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCS9i-XkwJ2tGB1mw0kodcYQ6KkTzetH4",
  authDomain: "shopping-app-e677c.firebaseapp.com",
  projectId: "shopping-app-e677c",
  storageBucket: "shopping-app-e677c.firebasestorage.app",
  messagingSenderId: "224869841898",
  appId: "1:224869841898:web:e165ebddbe971438511093",
  measurementId: "G-CPVJJBV7CC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { signInWithPopup };
