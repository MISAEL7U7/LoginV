// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCza_oN8q8Gz-lYvEFBt__qFEfSVGdEh9o",
  authDomain: "auth-ec63a.firebaseapp.com",
  projectId: "auth-ec63a",
  storageBucket: "auth-ec63a.firebasestorage.app",
  messagingSenderId: "1086603009418",
  appId: "1:1086603009418:web:0fe6807ec7b64b00d57c73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);