//RWAMAGANA
var falconGolfCB = document.getElementById('falcon-golf-CB');
var derevaCB = document.getElementById('dereva-CB');
var catholicParishCB = document.getElementById('catholic-parish-CB');
var stAugustineCB = document.getElementById('st-augustine-CB');

var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes);

//populate checkboxes according to saved destinations
for(const property in boxes){
    switch(property){
        case "falconGolf":
            if(boxes[property]){
                falconGolfCB.checked = true;
            }
            break;
        case "dereva":
            if(boxes[property]){
                derevaCB.checked = true;
            }
            break;
        case "catholicParish":
            if(boxes[property]){
                catholicParishCB.checked = true;
            }
            break;
        case "stAugustine":
            if(boxes[property]){
                stAugustineCB.checked = true;
            }
            break;
        default:
            console.log("no destination choosen");
            break;
    }
}

function saveCheck(event){
    var toDo = event.target

    if(toDo === falconGolfCB){
        if(falconGolfCB.checked){
            boxes.falconGolf = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.falconGolf = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === derevaCB){
        if(derevaCB.checked){
            boxes.dereva = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.dereva = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === catholicParishCB){
        if(catholicParishCB.checked){
            boxes.catholicParish = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.catholicParish = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }else if (toDo === stAugustineCB){
        if(stAugustineCB.checked){
            boxes.stAugustineCB = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.stAugustineCB = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }
}

falconGolfCB.addEventListener("click", saveCheck);
derevaCB.addEventListener("click", saveCheck);
catholicParishCB.addEventListener("click", saveCheck);
stAugustineCB.addEventListener("click", saveCheck);