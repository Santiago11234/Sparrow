// Initialize all the components that were made in HTML
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let final = [];
let button = document.getElementById("check");
let correct = true;
let cloneCount = 1; // initialize the clone counter

// add event listener to each block to enable dragging
// when a block is dragged, its ID will be the data transferred
for (let list of lists) {
  list.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

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

  
    let deleteButton = clonedBlock.querySelector("button");
    if (!deleteButton) {
      // create a delete button for the cloned block if it doesn't exist i give up man this sucks
      deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function() {
        let index = final.indexOf(clonedBlock);

        rightBox.removeChild(clonedBlock); // remove from right
        final.splice(index, 1); // remove from final list

        // move things up
        for (let i = 0; i < final.length; i++) {
          final[i].style.top = `${i * 40}px`;
        }
      });
      clonedBlock.appendChild(deleteButton); // delete button
    }
    rightBox.appendChild(clonedBlock);
    final.push(clonedBlock);
    //code    
    for(let list of final) {
      list.addEventListener("mouseover", function(e) {
        e.preventDefault();
        let selectedId = e.target.id;
        let selected = document.getElementById(selectedId);
          selected.deleteButton.color = "red";
          console.log("y dis goofy ahh code not running")
      });
      list.addEventListener("mouseout", function(e) {
        e.preventDefault();
        let selectedId = e.target.id;
        let selected = document.getElementById(selectedId);
        selected.style.color = "";
      });
    }
    //code
  }

      
});

button.addEventListener("click", function() {
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
});