// KIBUYE
var kivuToursCB = document.getElementById('kivu-tours-CB');
var ilizaCB = document.getElementById('iliza-CB');
var moeCB = document.getElementById('moe-CB');
var sailorsRestoCB = document.getElementById('sailors-resto-CB');
var cormaranCB = document.getElementById('cormaran-CB');
// KIGUFI
var amaniToursCB = document.getElementById('amani-tours-CB');
var elClassicoCB = document.getElementById('el-classico-CB');
var palmBeachCB = document.getElementById('palm-beach-CB');
// COUNTRYSIDE
var karisimbiCB = document.getElementById('karisimbi-CB');
var nyungweCB = document.getElementById('nyungwe-CB');



var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes);
for(const property in boxes){
    switch(property){
        case "KivuTours":
            if(boxes[property]){
                kivuToursCB.checked = true
            }
            break;
        case "ilizaHouseboat":
            if(boxes[property]){
                ilizaCB.checked = true
            }
            break;
        case "moe":
            if(boxes[property]){
                moeCB.checked = true;
            }
            break;
        case "sailorsResto":
            if(boxes[property]){
                sailorsRestoCB.checked = true;
            }
            break;
        case "cormaranLodge":
            if(boxes[property]){
                cormaranCB.checked = true;
            }
            break;
        case "amaniTours":
            if(boxes[property]){
                amaniToursCB.checked = true;
            }
            break;
        case "elClassico":
            if(boxes[property]){
                elClassicoCB.checked = true;
            }
            break;
        case "palmBeach":
            if(boxes[property]){
                palmBeachCB.checked = true;
            }
            break;
        case "karisimbi":
            if(boxes[property]){
                karisimbiCB.checked = true;
            }
            break;
        case "nyungwe":
            if(boxes[property]){
                nyungweCB.checked = true;
            }
            break;
        default:
            console.log('nothing checked');
            break;
    }
}

function saveCheck(event){
    console.log("CLICKED");
    var toDo = event.target;
    if(toDo === kivuToursCB){
        if (kivuToursCB.checked){
            boxes.KivuTours = true
            localStorage.setItem("boxes", JSON.stringify(boxes));
        } else {
            boxes.KivuTours = false
            localStorage.setItem("boxes", JSON.stringify(boxes));
        }
    } else if(toDo === ilizaCB){
        if (ilizaCB.checked){
            boxes.ilizaHouseboat = true
            localStorage.setItem("boxes", JSON.stringify(boxes));
        } else {
            boxes.ilizaHouseboat = false
            localStorage.setItem("boxes", JSON.stringify(boxes));
        }
    } else if(toDo === moeCB){
        if(moeCB.checked){
            boxes.moe = true
            localStorage.setItem("boxes", JSON.stringify(boxes));
        } else {
            boxes.moe = false
            localStorage.setItem("boxes", JSON.stringify(boxes));
        }
    } else if (toDo === sailorsRestoCB){
        if(sailorsRestoCB.checked){
            boxes.sailorsResto = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.sailorsResto = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === cormaranCB){
        if(cormaranCB.checked){
            boxes.cormaranLodge = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.cormaranLodge = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === amaniToursCB){
        if(amaniToursCB.checked){
            boxes.amaniTours = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.amaniTours = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if(toDo === elClassicoCB){
        if(elClassicoCB.checked){
            boxes.elClassico = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.elClassico = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === palmBeachCB){
        if(palmBeachCB.checked){
            boxes.palmBeach = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.palmBeach = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === karisimbiCB){
        if(karisimbiCB.checked){
            boxes.karisimbi = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.karisimbi = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === nyungweCB){
        if(nyungweCB.checked){
            boxes.nyungwe = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.nyungwe = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }
    console.log(boxes);
};

// KIBUYE
kivuToursCB.addEventListener('click', saveCheck);
ilizaCB.addEventListener('click', saveCheck);
moeCB.addEventListener('click', saveCheck);
sailorsRestoCB.addEventListener('click', saveCheck);
cormaranCB.addEventListener('click', saveCheck);
// KIGUFI
amaniToursCB.addEventListener('click', saveCheck);
elClassicoCB.addEventListener('click', saveCheck);
palmBeachCB.addEventListener('click', saveCheck);
//COUNTRYSIDE
karisimbiCB.addEventListener('click', saveCheck);
nyungweCB.addEventListener('click', saveCheck);