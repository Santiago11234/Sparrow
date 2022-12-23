// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, collection, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi306OwTBFNFPIx_EZ6t0HS0CsElaeFyM",
  authDomain: "sparrow-d7b78.firebaseapp.com",
  projectId: "sparrow-d7b78",
  storageBucket: "sparrow-d7b78.appspot.com",
  messagingSenderId: "1016426381965",
  appId: "1:1016426381965:web:38751f33563b256986d8c4",
  measurementId: "G-G3CWWBYGNR"
};

// Initialize Firebase
const auth = getAuth(firebaseConfig);


onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log("User is signed in");
  } else {
    console.log("User is signed out");
  }
});

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);