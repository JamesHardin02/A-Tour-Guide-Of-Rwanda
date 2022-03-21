var kivuToursCB = document.getElementById('kivu-tours-CB');
var boxes = {}
function saveCheck(){
    if(kivuToursCB.checked){
        boxes.kivuToursBox = true
        localStorage.setItem("boxes", JSON.stringify(boxes));
        console.log(boxes);
    }else{
        boxes.kivuToursBox = false
        localStorage.setItem("boxes", JSON.stringify(boxes));
        console.log(boxes);
    }
}

kivuToursCB.addEventListener("click", saveCheck)