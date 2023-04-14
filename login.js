//import fs from 'fs';

//var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
export var user;



/*
document.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById('do-login')
  btn.addEventListener('click', function (evt) {
    idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +username.value+ '</h1>';
  })
})
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-F4Lqjy9TjFxYmCmQpm4HSb74GSPE41I",
  authDomain: "newtest-561c2.firebaseapp.com",
  databaseURL: "https://newtest-561c2-default-rtdb.firebaseio.com",
  projectId: "newtest-561c2",
  storageBucket: "newtest-561c2.appspot.com",
  messagingSenderId: "841219402391",
  appId: "1:841219402391:web:6d04ab18255508fcb217d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, set, get, update, remove, ref, child }
  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const db = getDatabase();

function InsertData() {
  set(ref(db, "" + document.getElementById('username').value), { Name: document.getElementById('username').value, Email: document.getElementById('email').value, Password: document.getElementById('password').value })
    .then((userCredential) => {
      // Signed up
      alert("Successfully signed up!");
      // ...
    })
    .catch((error) => {
      //alert(error);
    });
}
function FindData() {
  const dbref = ref(db);
  console.log(document.getElementById('username').value);
  console.log(document.getElementById('password').value);
  get(child(dbref, "" + document.getElementById('username').value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().Password == document.getElementById('password').value) {
          document.getElementById('login').innerHTML = '<p>We\'re happy to see you again,</p><h1>' + username.value + '</h1> <a href="HomePage.html" class="start">Let\'s Code</a>';
          user = username.value;
          localStorage.setItem("person", user);
          localStorage.setItem("email", snapshot.val().Email);
          localStorage.setItem("money", snapshot.val().Money);
          localStorage.setItem("password", snapshot.val().Password);
          localStorage.setItem('clown', snapshot.val().clown);
          localStorage.setItem('bowtie', snapshot.val().bowtie);
          localStorage.setItem('headempty', snapshot.val().headempty);
          localStorage.setItem('party', snapshot.val().party);

          localStorage.setItem('scuba', snapshot.val().scuba);
          localStorage.setItem('glasses', snapshot.val().glasses);
          localStorage.setItem('shades', snapshot.val().shades);
          localStorage.setItem('eyesempty', snapshot.val().eyesempty);
        } else {
          alert("Password is incorrect");
        }

      } else {
        alert("This account does not exist");
      }
    })
    .catch((error) => {
      alert("hi")
    })

}
function clearFields() {

}

document.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById('btn')
  btn.addEventListener('click', function (evt) {
    /*
    fs.readFile("accountInfo.json", function(err, data) {
 
      // Check for errors
      if (err) throw err;
     
      // Converting to JSON
      const users = JSON.parse(data);
        
      console.log(users); // Print users 
      */
    //});
    //console.log("clicked");
    FindData();
  })
})


export function getUser() {
  return user;
}

