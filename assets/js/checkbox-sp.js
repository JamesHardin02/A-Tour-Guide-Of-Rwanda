var palaceCB = document.getElementById('palace-CB');
var centerRestoCB = document.getElementById('center-resto-CB');
var dayenuCB = document.getElementById('dayenu-CB');
var juiceExpCB = document.getElementById('juice-exp-CB');
var splendidCB = document.getElementById('splendid-CB');

var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes)

for(const property in boxes){
    switch(property){
        case "kingPalace":
            if(boxes[property]){
                palaceCB.checked = true;
            }
            break;
        case "centerResto":
            if(boxes[property]){
                centerRestoCB.checked = true;
            }
        case "dayenu": 
            if(boxes[property]){
                dayenuCB.checked = true;
            }
        case "juiceExp":
            if(boxes[property]){
                juiceExpCB.checked = true;
            }
            break;
        case "splendidHotel":
            if(boxes[property]){
                splendidCB.checked = true;
            }
            break;
        default:
            console.log("no destination choosen")
            break;
    }
}

function saveCheck(event){
    var toDo = event.target
    if(toDo === palaceCB){
        if(palaceCB.checked){
            boxes.kingPalace = true;
            localStorage.setItem('boxes', JSON.stringify(boxes))
        }else{
            boxes.kingPalace = false;
            localStorage.setItem('boxes', JSON.stringify(boxes))
        }
    } else if (toDo === centerRestoCB){ 
        if(centerRestoCB.checked){
            boxes.centerResto = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else{
            boxes.centerResto = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === dayenuCB){
        if(dayenuCB.checked){
            boxes.dayenu = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else{
            boxes.dayenu = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === juiceExpCB){
        if (juiceExpCB.checked){
            boxes.juiceExp = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.juiceExp = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === splendidCB){
        if (splendidCB.checked) {
            boxes.splendidHotel = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.splendidHotel = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }
}

palaceCB.addEventListener('click', saveCheck);
centerRestoCB.addEventListener('click', saveCheck);
dayenuCB.addEventListener('click', saveCheck);
juiceExpCB.addEventListener('click', saveCheck);
splendidCB.addEventListener('click', saveCheck);