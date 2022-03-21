var tourListButton = document.getElementById('tour-list-button');
var tourList = docuement.getElementById('tour-list')
function loadList() {
    console.log("clicked!")
    var listObj = JSON.parse(localStorage.getItem("boxes"))
    console.log(listObj)
};

tourListButton.addEventListener('click', loadList)