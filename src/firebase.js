// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBimstTXjXoTzm1yPHaob9hrNUD_X4UoL4",
  authDomain: "ghardekho-mern.firebaseapp.com",
  projectId: "ghardekho-mern",
  storageBucket: "ghardekho-mern.appspot.com",
  messagingSenderId: "525136104563",
  appId: "1:525136104563:web:13edcc52d5c78ecd76ae06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);