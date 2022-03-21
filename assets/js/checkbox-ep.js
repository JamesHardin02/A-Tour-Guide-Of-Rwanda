//RWAMAGANA
var falconGolfCB = document.getElementById('falcon-golf-CB');
var derevaCB = document.getElementById('dereva-CB');
var catholicParishCB = document.getElementById('catholic-parish-CB');
var stAugustineCB = document.getElementById('st-augustine-CB');
// GAHINI
var jamboCB = document.getElementById('jambo-CB');
var muhaziHotelCB = document.getElementById('muhazi-hotel-CB');
var anglicanCB = document.getElementById('anglican-CB');
// COUNTRYSIDE
var akageraCB = document.getElementById('akagera-CB');
var rhinoCB = document.getElementById('rhino-CB');

var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes);

//populate checkboxes according to saved destinations
for(const property in boxes){
    switch(property){
        // RWAMAGANA
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
        // GAHINI
        case "jambo":
            if(boxes[property]){
                jamboCB.checked = true;
            }
            break;
        case "muhaziHotel":
            if(boxes[property]){
                muhaziHotelCB.checked = true;
            }
            break;
        case "anglican":
            if(boxes[property]){
                anglicanCB.checked = true;
            }
            break;
        // COUNTRYSIDE
        case "akagera":
            if(boxes[property]){
                akageraCB.checked = true;
            }
            break;
        case "rhinoLodge":
            if(boxes[property]){
                rhinoCB.checked = true;
            }
            break;
        default:
            console.log("no destination choosen");
            break;
    }
}

function saveCheck(event){
    var toDo = event.target
    // RWAMAGANA
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
    } else if (toDo === stAugustineCB){
        if(stAugustineCB.checked){
            boxes.stAugustine = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.stAugustine = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === jamboCB){ //GAHINI
        if(jamboCB.checked){
            boxes.jambo = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.jambo = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === muhaziHotelCB){
        if(muhaziHotelCB.checked){
            boxes.muhaziHotel = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.muhaziHotel = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === anglicanCB){
        if(anglicanCB.checked){
            boxes.anglican = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.anglican = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === akageraCB){ // COUNTRYSIDE
        if(akageraCB.checked){
            boxes.akagera = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.akagera = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === rhinoCB){
        if(rhinoCB.checked){
            boxes.rhinoLodge = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.rhinoLodge = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }
}
// RWAMAGANA
falconGolfCB.addEventListener("click", saveCheck);
derevaCB.addEventListener("click", saveCheck);
catholicParishCB.addEventListener("click", saveCheck);
stAugustineCB.addEventListener("click", saveCheck);
// GAHINI
jamboCB.addEventListener("click", saveCheck);
muhaziHotelCB.addEventListener("click", saveCheck);
anglicanCB.addEventListener("click", saveCheck);
// COUNTRYSIDE
akageraCB.addEventListener("click", saveCheck);
rhinoCB.addEventListener("click", saveCheck);