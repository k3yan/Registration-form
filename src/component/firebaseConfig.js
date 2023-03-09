// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEwQzF1cCBHMAKK6GXKQNeJlkObvd9dyE",
  authDomain: "register-8585c.firebaseapp.com",
  projectId: "register-8585c",
  storageBucket: "register-8585c.appspot.com",
  messagingSenderId: "98790237656",
  appId: "1:98790237656:web:1d41c1bd2e61755156fead",
  measurementId: "G-VSCKY31QW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);