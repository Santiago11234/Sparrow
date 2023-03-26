let animation;
let money = 100;
const components = [
    {
      "id": "eyes",
      "w": 1575,
      "h": 530,
      "u": "Animationz/Accessories/",
      "p": "eyes.png",
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
  animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    animationData: jsonData
  });
}

function changeComponent(componentId, newImage) {
        
        for (let i = 0; i < components.length; i++) {
            if (components[i].id === componentId) {
                components[i].p = `${newImage}`;
                break;
            }
        }
        changeComponents(components);
    
  
}

function buyComponent(button, componentId, newImage, price) {
  if (money >= price) {
    money -= price;
    updateMoney();
    button.innerHTML = 'Equip';
    button.onclick = function() {
      changeComponent(componentId, newImage);
    }
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
  


window.onload = function() {
  fetch('Animationz/birdtalk.json')
  .then(response => response.json())
  .then(data => {
    loadAnimation(data);
  });
  updateMoney();
}