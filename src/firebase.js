// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUNRdwWAGbpkOyAe8jLg91ykSWFwVvnw",
  authDomain: "react-auth-f18f9.firebaseapp.com",
  projectId: "react-auth-f18f9",
  storageBucket: "react-auth-f18f9.appspot.com",
  messagingSenderId: "191898877771",
  appId: "1:191898877771:web:fe9ee44804df038d5eb2ce",
  measurementId: "G-Y660CLSXSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);