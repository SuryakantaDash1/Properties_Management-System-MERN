// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-84174.firebaseapp.com",
  projectId: "mern-estate-84174",
  storageBucket: "mern-estate-84174.appspot.com",
  messagingSenderId: "439221590012",
  appId: "1:439221590012:web:aa12466f2b19eb9a4fc479"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);