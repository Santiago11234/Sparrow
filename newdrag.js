// Initialize all the components that were made in HTML
let lists = document.getElementsByClassName("listDragDrop");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let final = [];
let button = document.getElementById("check");
let correct = true;
let cloneCount = 1; // initialize the clone counter
let player = document.getElementById("player");
let grid = document.getElementById("playground");

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
// button.addEventListener("click", function() {
//   for(let i = 0; i < final.length; i++) {
//     console.log(final[i].id.substring(0, 1));
//     if(final[i].id.substring(0, 1) != (i + 1) ) {
//       correct = false;
//     }
//   }
  
//   if (correct) {
//     alert("Correct");
//   } else {
//     alert("Incorrect");
//   }
// });

//running code section
// Define the initial direction
let direction = 'up';

button.addEventListener("click", function() {
  let commands = [];
  
  // Get the current player position
  let currentPosition = getPlayerPosition();
  let currentColumn = currentPosition.gridColumn;
  let currentRow = currentPosition.gridRow;

  for (let i = 0; i < final.length; i++) {
    let blockId = "" + final[i].id.substring(0, 1);
    switch (blockId) {
      case '1':
        // Move forward by 1 grid based on the current direction
        if (direction === 'up') {
          commands.push('forward');
        } else if (direction === 'right') {
          commands.push('right');
        } else if (direction === 'down') {
          commands.push('back');
        } else if (direction === 'left') {
          commands.push('left');
        }
        break;
      case '2':
        // Turn right
        commands.push('right');
        break;
      case '3':
        // Turn left
        commands.push('left');
        break;
      case '4':
        // Move back by 1 grid based on the current direction
        if (direction === 'up') {
          commands.push('back');
        } else if (direction === 'right') {
          commands.push('left');
        } else if (direction === 'down') {
          commands.push('forward');
        } else if (direction === 'left') {
          commands.push('right');
        }
        break;
      default:
        console.log("Invalid command");
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
  let delay = 500; // Adjust the delay as needed (in milliseconds)

  for (let i = 0; i < commands.length; i++) {
    setTimeout(function () {
      let command = commands[i];
      let currentPosition = getPlayerPosition();

      if (command === 'forward') {
        movePlayer(currentPosition.gridColumn+1, currentPosition.gridRow);
      } else if (command === 'right') {
        direction = turnRight(direction);
        movePlayer(currentPosition.gridColumn, currentPosition.gridRow);
      } else if (command === 'left') {
        direction = turnLeft(direction);
        movePlayer(currentPosition.gridColumn, currentPosition.gridRow);
      } else if (command === 'back') {
        movePlayer(currentPosition.gridColumn-1, currentPosition.gridRow);
      }
    }, delay * i);
  }
}

function turnRight(direction) {
  if (direction === 'up') {
    turnPlayer('right');
    return 'right';
  } else if (direction === 'right') {
    turnPlayer('down');
    return 'down';
  } else if (direction === 'down') {
    turnPlayer('left');
    return 'left';
  } else if (direction === 'left') {
    turnPlayer('up');
    return 'up';
  }
}

function turnLeft(direction) {
  if (direction === 'up') {
    turnPlayer('left');
    return 'left';
  } else if (direction === 'right') {
    turnPlayer('up');
    return 'up';
  } else if (direction === 'down') {
    turnPlayer('right');
    return 'right';
  } else if (direction === 'left') {
    turnPlayer('down');
    return 'down';
  }
}

function turnPlayer(direction) {
  player.style.transform = 'rotate(90deg)';
  if (direction === 'right') {
    direction
}
