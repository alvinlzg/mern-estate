// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ece95.firebaseapp.com",
  projectId: "mern-estate-ece95",
  storageBucket: "mern-estate-ece95.appspot.com",
  messagingSenderId: "859609936436",
  appId: "1:859609936436:web:1489f02dda48e086301061"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);