let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let final = [];
let button = document.getElementById("check");
let correct = true;

for(list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            final.push(selected)
            selected = null;
            console.log(final);
        });

        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            let index = final.indexOf(selected);
            final.splice(index, 1)
            selected = null;
            console.log(final);
        });
    })
}

button.onclick = () => {
    for(let i = 0; i < final.length; i++) {
        if(!(final[i].id === i+1+"")) {
            correct = false;
        }
    }
    if(!correct) {
        alert("incorrect");
        correct = true;
    } else if(correct) {
        alert("correct");
    }
}