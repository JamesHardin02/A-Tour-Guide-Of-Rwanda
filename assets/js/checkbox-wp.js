var kivuToursCB = document.getElementById('kivu-tours-CB');
var boxes = {}
function saveCheck(){
    if(kivuToursCB.checked){
        boxes.KivuTours = true
        localStorage.setItem("boxes", JSON.stringify(boxes));
        console.log(boxes);
    }else{
        boxes.KivuTours = false
        localStorage.setItem("boxes", JSON.stringify(boxes));
        console.log(boxes);
    }
}

kivuToursCB.addEventListener("click", saveCheck)