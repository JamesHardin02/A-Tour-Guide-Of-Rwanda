var tourListButton = document.getElementById('tour-list-button');
var tourList = document.getElementById('tour-list')
var opened = false;
function loadList() {
    if(!opened){
        opened = true;
        while(tourList.firstChild){
            tourList.firstChild.remove();
        };
        var boxes = JSON.parse(localStorage.getItem("boxes"));
        console.log(boxes);
        var introP = document.createElement("p");
        introP.className = "flow-text center";
        introP.textContent = "Your adventure: ";
        tourList.appendChild(introP);
        for(const property in boxes){
            var locationP = document.createElement("p");
            locationP.className = "flow-text"

            switch(property){
                case "KivuTours": 
                    if(boxes[property]){
                        console.log(boxes[property])
                        locationP.textContent = "Kivu Tours: Take a boating adventure on Lake Kivu"
                    }
                    break;
                case "ilizaHouseboat":
                    if(boxes[property]){
                        locationP.textContent = "Iliza Houseboat: Cruise in comfort and luxury around Lake Kivu"
                    }
                    break;
                case "moe":
                    if(boxes[property]){
                        locationP.textContent = "Visit the Musuem of Environment in Kibuye"
                    }
                    break;
                case "sailorsResto":
                    if(boxes[property]){
                        locationP.textContent = "Sailors Restaurant and Cafe: Enjoy an upscale meal overlooking Lake Kivu"
                    }
                    break;
                case "cormaranLodge":
                    if(boxes[property]){
                        locationP.textContent = "Cormaran Lodge: Lodge in scerenity on the lushious banks of Lake Kivu"
                    }
                    break;
                case "amaniTours":
                    if(boxes[property]){
                        locationP.textContent = "Amani Jordan Island Tours: Explore the beautiful islands of Lake Kivu"
                    }
                    break;
                case "elClassico":
                    if(boxes[property]){
                        locationP.textContent = "El Classico Beach Chez West: Enjoy delicious Rwandan food on the beach"
                    }
                    break;
                case "palmBeach":
                    if(boxes[property]){
                        locationP.textContent = "Palm Beach Resort: Lodge on the beautiful shores of Lake Kivu"
                    }
                    break;
                case "karisimbi":
                    if(boxes[property]){
                        locationP.textContent = "Mount Karisimbi: Hike Mount Karisimbi and visit the friendly gorillas"
                    }
                    break;
                case "nyungwe":
                    if(boxes[property]){
                        locationP.textContent = "Nyungwe Forest National Park: Hike the trails of the lush Nyungwe Forest and visit the friendly chimpanzees"
                    }
                    break;
            };

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