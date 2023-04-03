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

function UpdateData() {
  update(ref(db, "" + localStorage.getItem('person')), { Money: money })
    .then((userCredential) => {
      // ...
    })
    .catch((error) => {
      //alert(error);
    });
}
function StartMoney() {
  const dbref = ref(db);
  //console.log(document.getElementById('username').value);
  //console.log(document.getElementById('password').value);
  get(child(dbref, "" + localStorage.getItem('person')))
    .then((snapshot) => {
      if (snapshot.exists()) {
        localStorage.setItem("Money", ""+ snapshot.val().Money);
      } else {
        alert("error in money");
      }
    })
    .catch((error) => {
      //alert(error)
    })

}
//StartMoney();

/*
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
        
      //});
        console.log("clicked");
        FindData();
    })
})

export function getUser(){
return user;
}
  */