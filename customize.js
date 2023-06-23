let money = 0;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-F4Lqjy9TjFxYmCmQpm4HSb74GSPE41I",
  authDomain: "newtest-561c2.firebaseapp.com",
  databaseURL: "https://newtest-561c2-default-rtdb.firebaseio.com",
  projectId: "newtest-561c2",
  storageBucket: "newtest-561c2.appspot.com",
  messagingSenderId: "841219402391",
  appId: "1:841219402391:web:6d04ab18255508fcb217d2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function setDefaultHat(value) {
  update(ref(db, "" + localStorage.getItem('person')), { headempty: value })
    .then((userCredential) => {
      localStorage.setItem('headempty', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setClown(value) {
  update(ref(db, "" + localStorage.getItem('person')), { clown: value })
    .then((userCredential) => {
      localStorage.setItem('clown', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setBowtie(value) {
  update(ref(db, "" + localStorage.getItem('person')), { bowtie: value })
    .then((userCredential) => {
      localStorage.setItem('bowtie', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setParty(value) {
  update(ref(db, "" + localStorage.getItem('person')), { party: value })
    .then((userCredential) => {
      localStorage.setItem('party', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setDefaultFace(value) {
  update(ref(db, "" + localStorage.getItem('person')), { eyesempty: value })
    .then((userCredential) => {
      localStorage.setItem('eyesempty', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setScuba(value) {
  update(ref(db, "" + localStorage.getItem('person')), { scuba: value })
    .then((userCredential) => {
      localStorage.setItem('scuba', value);
    })
    .catch((error) => {
      //alert(error);
    });
}

function setGlasses(value) {
  update(ref(db, "" + localStorage.getItem('person')), { glasses: value })
    .then((userCredential) => {
      localStorage.setItem('glasses', value);
    })
    .catch((error) => {
      //alert(error);
    });
}
function setShades(value) {
  update(ref(db, "" + localStorage.getItem('person')), { shades: value })
    .then((userCredential) => {
      localStorage.setItem('shades', value);
    })
    .catch((error) => {
      //alert(error);
    });
}
function UpdateData() {
  update(ref(db, "" + localStorage.getItem('person')), { Money: money })
    .then((userCredential) => {
      // ...
    })
    .catch((error) => {
      //alert(error);
    });
}

function addMoney(addition) {
  money += addition;
  UpdateData();
  updateMoney();
}
function StartMoney() {
  const dbref = ref(db);
  //console.log(document.getElementById('username').value);
  //console.log(document.getElementById('password').value);
  get(child(dbref, "" + localStorage.getItem('person')))
    .then((snapshot) => {

      if (snapshot.exists()) {
        console.log(snapshot.val().Money);
        localStorage.setItem('Money', "" + snapshot.val().Money);

        money = parseInt(localStorage.getItem("Money"));
        localStorage.setItem('clown', snapshot.val().clown);
        localStorage.setItem('bowtie', snapshot.val().bowtie);
        localStorage.setItem('headempty', snapshot.val().headempty);
        localStorage.setItem('party', snapshot.val().party);
        console.log(snapshot.val().scuba + " hello");
        localStorage.setItem('scuba', snapshot.val().scuba);
        localStorage.setItem('glasses', snapshot.val().glasses);
        localStorage.setItem('shades', snapshot.val().shades);
        localStorage.setItem('eyesempty', snapshot.val().eyesempty);
        updateMoney();
        //window.location.href = 'Customize.html';

        if (parseInt(localStorage.getItem('clown')) == 2) {
          changeComponent('head', 'clown.png');
          document.getElementById('clown').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('bowtie')) == 2) {
          changeComponent('head', 'bowtie.png');
          document.getElementById('bowtie').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('headempty')) == 2) {
          changeComponent('head', 'headempty.png');
          document.getElementById('headempty').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('party')) == 2) {
          changeComponent('head', 'party.png');
          document.getElementById('party').innerHTML = 'Equip';
        }

        if (parseInt(localStorage.getItem('clown')) == 1) {
          document.getElementById('clown').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('bowtie')) == 1) {
          document.getElementById('bowtie').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('headempty')) == 1) {
          document.getElementById('headempty').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('party')) == 1) {
          document.getElementById('party').innerHTML = 'Equip';
        }

        if (parseInt(localStorage.getItem('glasses')) == 2) {
          changeComponent('eyes', 'glasses.png');
          document.getElementById('glasses').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('shades')) == 2) {
          changeComponent('eyes', 'shades.png');
          document.getElementById('shades').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('eyesempty')) == 2) {
          changeComponent('eyes', 'eyesempty.png');
          document.getElementById('eyesempty').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('scuba')) == 2) {
          changeComponent('eyes', 'scuba.png');
          document.getElementById('scuba').innerHTML = 'Equip';
        }


        if (parseInt(localStorage.getItem('glasses')) == 1) {
          //changeComponent('eyes', 'glasses.png');
          document.getElementById('glasses').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('shades')) == 1) {
          //changeComponent('eyes', 'shades.png');
          document.getElementById('shades').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('eyesempty')) == 1) {
          //changeComponent('eyes', 'eyesempty.png');
          document.getElementById('eyesempty').innerHTML = 'Equip';
        } if (parseInt(localStorage.getItem('scuba')) == 1) {
          //changeComponent('eyes', 'scuba.png');
          document.getElementById('scuba').innerHTML = 'Equip';
        }

      } else {
        alert("error in money");
      }
    })
    .catch((error) => {
      //alert(error)
    })

}

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


//StartMoney();
let animation;

//money = parseInt(localStorage.getItem("Money"));
StartMoney();
const components = [
  {
    "id": "eyes",
    "w": 1575,
    "h": 530,
    "u": "Animationz/Accessories/",
    "p": "eyesempty.png",
    "e": 0
  },
  {
    "id": "chest",
    "w": 2138,
    "h": 1430,
    "u": "Animationz/Accessories/",
    "p": "chest.png",
    "e": 0
  },
  {
    "id": "head",
    "w": 2070,
    "h": 1921,
    "u": "Animationz/Accessories/",
    "p": "headempty.png",
    "e": 0
  },
  {
    "id": "shoes",
    "w": 1386,
    "h": 316,
    "u": "Animationz/Accessories/",
    "p": "shoes.png",
    "e": 0
  }
];


function loadAnimation(jsonData) {

  if (animation) {
    animation.destroy();
  }
  console.log(jsonData);
  animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    animationData: jsonData
  });

}


function unequip(c, cat) {
  if (cat == 'head') {
    if (parseInt(localStorage.getItem('clown')) == 2 && c != 'clown.png') {
      setClown(1);
    } else if (parseInt(localStorage.getItem('bowtie')) == 2 && c != 'bowtie.png') {
      setBowtie(1);
    } else if (parseInt(localStorage.getItem('party')) == 2 && c != 'party.png') {
      setParty(1);
    } else if (parseInt(localStorage.getItem('headempty')) == 2 && c != 'headempty.png') {
      setDefaultHat(1);
    }
  } else if (cat == 'eyes') {
    if (parseInt(localStorage.getItem('eyesempty')) == 2 && c != 'eyesempty.png') {
      setDefaultFace(1);
    } else if (parseInt(localStorage.getItem('scuba')) == 2 && c != 'scuba.png') {
      setScuba(1);
    } else if (parseInt(localStorage.getItem('glasses')) == 2 && c != 'glasses.png') {
      setGlasses(1);
    } else if (parseInt(localStorage.getItem('shades')) == 2 && c != 'shades.png') {
      setShades(1);
    }
  }

}
function changeComponent(componentId, newImage) {

  for (let i = 0; i < components.length; i++) {
    if (components[i].id === componentId) {
      components[i].p = `${newImage}`;
      break;
    }
  }
  changeComponents(components);
  unequip(newImage, componentId);

  if (newImage == 'clown.png') {
    setClown(2);
  } else if (newImage == 'bowtie.png') {
    setBowtie(2);
  } else if (newImage == 'party.png') {
    setParty(2);
  } else if (newImage == 'headempty.png') {
    setDefaultHat(2);
  } else if (newImage == 'eyesempty.png') {
    setDefaultFace(2);
  } else if (newImage == 'scuba.png') {
    setScuba(2);
  } else if (newImage == 'glasses.png') {
    setGlasses(2);
  } else if (newImage == 'shades.png') {
    setShades(2);
  }



}

function buyComponent(id, componentId, newImage, price) {
  if (money >= price) {
    let button = document.getElementById(id);
    money -= price;
    updateMoney();
    UpdateData();
    button.innerHTML = 'Equip';

    changeComponent(componentId, newImage);
  } else {
    alert('You do not have enough money to buy this item.');
  }
}

function updateMoney() {
  let moneyElement = document.getElementById("money");
  moneyElement.innerHTML = "$" + money;
}

function changeComponents(list) {
  if (window.location.href.indexOf("HomePage.html") !== -1) {
    fetch('Animationz/wave.json')
      .then(response => response.json())
      .then(data => {
        let myObject = data;
        for (let i = 0; i < list.length; i++) {
          const componentId = list[i].id;
          const newImage = list[i].p; // fix here
          for (let j = 10; j < myObject.assets.length; j++) {
            if (myObject.assets[j].id === componentId) {
              myObject.assets[j].p = `${newImage}`;
              //data.assets[j].p = `${newImage}`;
              break;
            }
          }
        }
        loadAnimation(myObject);
      });
  }
  else {
    fetch('Animationz/birdtalk.json')
      .then(response => response.json())
      .then(data => {
        let myObject = data;
        for (let i = 0; i < list.length; i++) {
          const componentId = list[i].id;
          const newImage = list[i].p; // fix here
          for (let j = 9; j < myObject.assets.length; j++) {
            if (myObject.assets[j].id === componentId) {
              myObject.assets[j].p = `${newImage}`;
              break;
            }
          }
        }
        loadAnimation(myObject);
      });
  }



}



window.onload = function () {

  if (window.location.href.indexOf("HomePage.html") !== -1) {
    fetch('Animationz/wave.json')
      .then(response => response.json())
      .then(data => {
        loadAnimation(data);
      });
  }

  else if (window.location.href.indexOf("Customize.html") !== -1) {
    fetch('Animationz/birdtalk.json')
      .then(response => response.json())
      .then(data => {

        loadAnimation(data);

      });
  } 
  //updateMoney();
}

if (window.location.href.indexOf("Customize.html") !== -1) {

  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('headempty')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('head', 'headempty.png')
      } else {
        buyComponent('headempty', 'head', 'headempty.png', 0)
      }
    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('clown')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('head', 'clown.png')
      } else {
        buyComponent('clown', 'head', 'clown.png', 25)
      }

    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('bowtie')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('head', 'bowtie.png')
      } else {
        buyComponent('bowtie', 'head', 'bowtie.png', 15)
      }
    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('party')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('head', 'party.png')
      } else {
        buyComponent('party', 'head', 'party.png', 15)
      }
    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('eyesempty')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        schangeComponent('eyes', 'eyesempty.png')
      } else {
        buyComponent('eyesempty', 'eyes', 'eyesempty.png', 0)
      }

    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('glasses')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('eyes', 'glasses.png')
      } else {
        buyComponent('glasses', 'eyes', 'glasses.png', 10)
      }

    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('scuba')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('eyes', 'scuba.png')
      } else {
        buyComponent('scuba', 'eyes', 'scuba.png', 10)
      }

    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('shades')
    btn.addEventListener('click', function (evt) {
      if (btn.innerHTML == 'Equip') {
        changeComponent('eyes', 'shades.png')
      } else {
        buyComponent('shades', 'eyes', 'shades.png', 10)
      }

    })
  })
}
if (window.location.href.indexOf("dragtemp.html") !== -1) {
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('nextLesson')
    btn.addEventListener('click', function (evt) {
      addMoney(50);
    })
  })
}


