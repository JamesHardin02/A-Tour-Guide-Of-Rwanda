var childrenVillageCB = document.getElementById('children-village-CB');

var boxes = JSON.parse(localStorage.getItem('boxes')) || {};
console.log(boxes);

for(const property in boxes){
    switch (property){
        case "childrenVillage":
            if(boxes[property]){
                childrenVillageCB.checked = true;
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
    }
}

childrenVillageCB.addEventListener('click', saveCheck);