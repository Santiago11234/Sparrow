// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoQbB_Ryp7F63KusZjc7szPNYO0VTdPys",
  authDomain: "sparrow-5c86c.firebaseapp.com",
  projectId: "sparrow-5c86c",
  storageBucket: "sparrow-5c86c.appspot.com",
  messagingSenderId: "439722061326",
  appId: "1:439722061326:web:1e029b28c9be62c899565f",
  measurementId: "G-WB108EETEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);