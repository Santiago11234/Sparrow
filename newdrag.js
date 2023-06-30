// Initialize all the components that were made in HTML
let lists = document.getElementsByClassName("listDragDrop");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let final = [];
let button = document.getElementById("check");
let lessonButton = document.getElementById("lesson-check");
let correct = true;
let cloneCount = 1; // initialize the clone counter
let player = document.getElementById("player");
let grid = document.getElementById("playground");
let birdIcon = document.getElementById('bird-icon');

console.log(birdIcon.style.transform)
// add event listener to each block to enable dragging
// when a block is dragged, its ID will be the data transferred
for (let list of lists) {
  list.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  //disable delete button

}

// add dragover event listener to the left box to allow dropping
leftBox.addEventListener("dragover", function(e) {
  e.preventDefault();
});

// add dragend event listener to handle block movement inside the left box
leftBox.addEventListener("dragend", function(e) {
  let selectedId = e.dataTransfer.getData("text/plain");
  let selected = document.getElementById(selectedId);

  if (rightBox.contains(selected)) {
    // the block is being moved from the right side to the left side
    let index = final.indexOf(selected);

    if (selected.parentNode === rightBox) {
      // remove the block from the rightBox if it's a clone
      rightBox.removeChild(selected);
    }

    selected.remove(); // delete the block from the list
    final.splice(index, 1); // remove the block from the final array

    // reset block positions on the right side
    for (let i = 0; i < final.length; i++) {
      final[i].style.top = `${i * 40}px`;
    }
  } else if (leftBox.contains(selected)) {
    // the block is being moved within the left side (no action needed)
  }

  
});

// add dragover event listener to the right box to allow dropping
rightBox.addEventListener("dragover", function(e) {
  e.preventDefault();
});


// add drop event listener to the right box to handle block placement
rightBox.addEventListener("drop", function(e) {
  e.preventDefault();
  let selectedId = e.dataTransfer.getData("text/plain");
  let selected = document.getElementById(selectedId);

  if (selected.parentElement !== rightBox) {
    // the block is not already on the right side
    let clonedBlock = selected.cloneNode(true);
    let clonedId = selectedId + "-clone" + cloneCount;
    cloneCount++;

    clonedBlock.id = clonedId; 
    clonedBlock.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    rightBox.appendChild(clonedBlock);
    final.push(clonedBlock);
    //delete button crap

    //mouse hover crap    
    for (let list of final) {
      let deleteButton = list.querySelector(".delete-button");
    
      list.addEventListener("mouseover", function() {
        deleteButton.style.display = "block";
      });
    
      list.addEventListener("mouseout", function(e) {
        if (!list.contains(e.relatedTarget) && !deleteButton.contains(e.relatedTarget)) {
          deleteButton.style.display = "none";
        }
      });
      deleteButton.addEventListener("click", function(e) {
        e.stopPropagation();
        let index = final.indexOf(list);
        rightBox.removeChild(list); // Remove from right
        final.splice(index, 1); // Remove from final list
        // Move things up
        for (let i = 0; i < final.length; i++) {
          final[i].style.top = `${i * 40}px`;
        }
      });
    }
    //mouse hover crap
  }
      
});


//ignore this for the playground
if(lessonButton != null) {
  lessonButton.addEventListener("click", runLessonButton);
}
function runLessonButton() {
  for(let i = 0; i < final.length; i++) {
    console.log(final[i].id.substring(0, 1));
    if(final[i].id.substring(0, 1) != (i + 1) ) {
      correct = false;
    }
  }
  if (correct) {
    alert("Correct");
  } else {
    alert("Incorrect");
  }
}
//end of normal learning

//reset stuff
let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetCode);

function resetCode() {
  for(let list of final) {
    rightBox.removeChild(list); 
  }
  final = [];
  movePlayer(1, 1); 
  direction = 'down'; 
  rotationAngle = 0;
  birdIcon.style.transform = `rotate(${rotationAngle}deg)`;
}

//PLAYGROUND BELOW DONT TOUCH IF U WANT TO LIVE
//running code section
// Define the initial direction
let direction = 'down';
let rotationAngle = 0;

button.addEventListener("click", function() {
  let commands = [];
  let currentPosition = getPlayerPosition();
  let currentColumn = currentPosition.gridColumn;
  let currentRow = currentPosition.gridRow;

  for (let i = 0; i < final.length; i++) {
    let blockId = "" + final[i].id.substring(0, 1);
    switch (blockId) {
      case '1':
        commands.push('forward');
        break;
      case '2':
        commands.push('right');
        break;
      case '3':
        commands.push('left');
        break;
      case '4':
        commands.push('back');
        break;
      default:
        break;
    }
  }
  executeCommands(commands);
});

function movePlayer(column, row) {
  player.style.gridColumnStart = column;
  player.style.gridRowStart = row;
}

function getPlayerPosition() {
  let gridColumn = parseInt(getComputedStyle(player).gridColumnStart);
  let gridRow = parseInt(getComputedStyle(player).gridRowStart);
  return { gridColumn, gridRow };
}

function executeCommands(commands) {
  let delay = 500; 

  for (let i = 0; i < commands.length + 1; i++) {
    setTimeout(function () {
      let command = commands[i];
      let currentPosition = getPlayerPosition();

      if (command === 'forward') {
        moveForward(currentPosition);
      } else if (command === 'right') {
        turnRight();
      } else if (command === 'left') {
        turnLeft();
      } else if (command === 'back') {
        moveBackward(currentPosition);
      }
    }, delay * i);
  }  
  //go back to start pos
  setTimeout(function () {
    movePlayer(1, 1); 
    direction = 'down'; 
    rotationAngle = 0;
    birdIcon.style.transform = `rotate(${rotationAngle}deg)`;
  }, delay * commands.length);
}

function moveForward(currentPosition) {
  let { gridColumn, gridRow } = currentPosition;
  if (direction === 'up') {
    movePlayer(gridColumn, gridRow - 1);
  } else if (direction === 'right') {
    movePlayer(gridColumn + 1, gridRow);
  } else if (direction === 'down') {
    movePlayer(gridColumn, gridRow + 1);
  } else if (direction === 'left') {
    movePlayer(gridColumn - 1, gridRow);
  }
}

function moveBackward(currentPosition) {
  let { gridColumn, gridRow } = currentPosition;
  if (direction === 'up') {
    movePlayer(gridColumn, gridRow + 1);
  } else if (direction === 'right') {
    movePlayer(gridColumn - 1, gridRow);
  } else if (direction === 'down') {
    movePlayer(gridColumn, gridRow - 1);
  } else if (direction === 'left') {
    movePlayer(gridColumn + 1, gridRow);
  }
}

function turnRight() {
  if (direction === 'up') {
    direction = 'right';
    rotationAngle += 90;
  } else if (direction === 'right') {
    direction = 'down';
    rotationAngle += 90;
  } else if (direction === 'down') {
    direction = 'left';
    rotationAngle += 90;
  } else if (direction === 'left') {
    direction = 'up';
    rotationAngle += 90;
  }

  birdIcon.style.transform = `rotate(${rotationAngle}deg)`;
}

function turnLeft() {
  if (direction === 'up') {
    direction = 'left';
    rotationAngle -= 90;
  } else if (direction === 'right') {
    direction = 'up';
    rotationAngle -= 90;
  } else if (direction === 'down') {
    direction = 'right';
    rotationAngle -= 90;
  } else if (direction === 'left') {
    direction = 'down';
    rotationAngle -= 90;
  }
  birdIcon.style.transform = `rotate(${rotationAngle}deg)`;
}


//the special items u place things ykwim

// Get the item element
const itemElement = document.getElementById('item');

// Get the player element
const playerElement = document.getElementById('player');

// Add a dragstart event listener to the item element
itemElement.addEventListener('dragstart', dragStart);

// Add a drop event listener to the grid items
const gridItems = document.getElementsByClassName('grid-item');
for (const gridItem of gridItems) {
  gridItem.addEventListener('drop', drop);
  gridItem.addEventListener('dragover', dragOver);
}

// Drag start event handler
function dragStart(event) {
  // Set the ID of the dragged item to a unique value
  const itemId = 'dragged-item-' + Date.now();
  event.target.setAttribute('id', itemId);

  // Set the data being dragged to the ID of the dragged item
  event.dataTransfer.setData('text/plain', itemId);

  // Hide the original item while dragging
  event.target.style.opacity = '0';

  // Adjust the size of the dragged item
  event.target.style.width = `${event.target.offsetWidth}px`;
  event.target.style.height = `${event.target.offsetHeight}px`;
}

// Drag over event handler
function dragOver(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();

  
  // Get the ID of the dragged item
  const itemId = event.dataTransfer.getData('text/plain');

  // Check if the dropped element is a valid grid item and not the player
  if (event.target.classList.contains('grid-item') && !event.target.contains(playerElement)) {
    // Create a new item element

    const newItemElement = document.createElement('div');
    newItemElement.classList.add('grid-item');

    const newBirdImage = document.createElement('img');
    newBirdImage.src = 'Assets/seed.png';
    newBirdImage.alt = 'Bird Icon';
    newBirdImage.id = "bird-icon";

    newItemElement.appendChild(newBirdImage);
    event.target.appendChild(newItemElement);
  }

  // Reset the style of the dragged item
  const draggedItem = document.getElementById(itemId);
  draggedItem.style.opacity = '';
  draggedItem.style.width = '';
  draggedItem.style.height = '';
  draggedItem.id = 'bird-icon';

}