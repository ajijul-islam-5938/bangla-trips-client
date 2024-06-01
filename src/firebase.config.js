// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDn5q3JHR8VitH_u5ERpLP8MB_eDHERoA",
  authDomain: "assignment-12-819b8.firebaseapp.com",
  projectId: "assignment-12-819b8",
  storageBucket: "assignment-12-819b8.appspot.com",
  messagingSenderId: "197834282550",
  appId: "1:197834282550:web:db5fb75fc95bde3f456a97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;