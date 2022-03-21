var childrenVillageCB = document.getElementById('children-village-CB');
var volcanosCB = document.getElementById('volcanos-CB');
var gorillaCB = document.getElementById('gorilla-CB');
var museumCB = document.getElementById('museum-CB');


var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes);

for(const property in boxes){
    switch (property){
        case "childrenVillage":
            if(boxes[property]){
                childrenVillageCB.checked = true;
            }
            break;
        case "volcanos":
            if(boxes[property]){
                volcanosCB.checked = true;
            }
            break;
        case "gorillaFund":
            if(boxes[property]){
                gorillaCB.checked = true; 
            }
            break;
        case "museum":
            if(boxes[property]){
                museumCB.checked = true; 
            }
            break;
    }
}

function saveCheck(event){
    var toDo = event.target
    if (toDo === childrenVillageCB){
        if (childrenVillageCB.checked){
            boxes.childrenVillage = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
        boxes.childrenVillage = false;
        localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    } else if (toDo === volcanosCB){
        if(volcanosCB.checked){
            boxes.volcanos = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.volcanos = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }else if (toDo === gorillaCB){
        if(gorillaCB.checked){
            boxes.gorillaFund = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.GorillaFund = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }else if (toDo === museumCB){
        if(museumCB.checked){
            boxes.museum = true;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        } else {
            boxes.museum = false;
            localStorage.setItem('boxes', JSON.stringify(boxes));
        }
    }
}

childrenVillageCB.addEventListener('click', saveCheck);
volcanosCB.addEventListener('click', saveCheck);
gorillaCB.addEventListener('click', saveCheck);
museumCB.addEventListener('click', saveCheck);