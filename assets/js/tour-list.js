var tourListButton = document.getElementById('tour-list-button');
var tourList = document.getElementById('tour-list')
var opened = false;
function loadList() {
    if(!opened){
        opened = true;
        while(tourList.firstChild){
            tourList.firstChild.remove();
        };
        var listObj = JSON.parse(localStorage.getItem("boxes"));
        console.log(listObj);
        for(const property in listObj){
            console.log(property)
            var locationP = document.createElement("p");
            locationP.textContent = property
            locationP.className = "flow-text"
            tourList.appendChild(locationP);
        };
    } else{
        opened = false;
        while(tourList.firstChild){
            tourList.firstChild.remove();
        };
    }

};

tourListButton.addEventListener('click', loadList);