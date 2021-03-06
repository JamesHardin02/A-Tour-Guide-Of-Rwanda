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
                // WESTERN PROVINCE
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
                // EASTERN PROVINCE
                case "falconGolf":
                    if(boxes[property]){
                        locationP.textContent = "Falcon Golf Resort and Country Club: Enjoy a round of Golf by Lake Muhazi"
                    }
                    break;
                case "dereva":
                    if(boxes[property]){
                        locationP.textContent = "Dereva Hotel: Enjoy a comfortable stay at the Dereva Hotel in Rwamagana"
                    }
                    break;
                case "catholicParish":
                    if(boxes[property]){
                        locationP.textContent = "Rwamagana Catholic Parish: Be enriched by the Catholic faith of the people of Rwamagana"
                    }
                    break;
                case "stAugustine":
                    if(boxes[property]){
                        locationP.textContent = "Centre Pastoral St. Augustin hotel: Lodge in the sanctuary of the Centre Pastoral St. Augustin hotel"
                    }
                    break;
                case "jambo":
                    if(boxes[property]){
                        locationP.textContent = "Jambo Beach: Enjoy a delicious meal by Lake Muhazi at Jambo Beach"
                    }
                    break;
                case "muhaziHotel":
                    if(boxes[property]){
                        locationP.textContent = "Muhazi Beach Hotel: Wake up to beautiful views of Lake Muhazi from a cozy cottage"
                    }
                    break;
                case "anglican":
                    if(boxes[property]){
                        locationP.textContent = "Anglican Heritage Sites: Visit Gahini's Anglican Christian Heritage sites"
                    }
                    break;
                case "akagera":
                    if(boxes[property]){
                        locationP.textContent = "Akagera National Park: Safari adventure in the savannah"
                    }
                    break;
                case "rhinoLodge":
                    if(boxes[property]){
                        locationP.textContent = "Akagera Rhino Lodge: Lodge in the mountains of Akagera over looking the savannah and Lake Ihema"
                    }
                    break;
                // SOUTHERN PROVINCE
                case "kingPalace":
                    if(boxes[property]){
                        locationP.textContent = "Ancient King Palace: Visit the palace of an ancient African king"
                    }
                    break;
                case "centerResto":
                    if(boxes[property]){
                        locationP.textContent = "Rerumwana Center Restaurant: Enjoy rwandan cuisine at the Rerumwana Center Restaurant"
                    }
                    break;
                case "dayenu": 
                    if(boxes[property]){
                        locationP.textContent = "Dayenu Hotel: Lodge at the Dayenu Hotel on your visit to the Southern Province"
                    }
                    break;
                case "juiceExp":
                    if(boxes[property]){
                        locationP.textContent = "Juice Making Cultural Experience: Make fresh juice in the traditional Rwandan way"
                    }
                    break;
                case "splendidHotel":
                    if(boxes[property]){
                        locationP.textContent = "Splendid Hotel: Enjoy a comfortable stay at the Splendid Hotel"
                    }
                    break;
                // NORTHERN PROVINCE
                case "childrenVillage":
                    if(boxes[property]){
                        locationP.textContent = "SOS Childrens Village: Visit the local childrens village and see how rwanda cares for their orphans"
                    }
                    break;
                case "volcanos":
                    if(boxes[property]){
                        locationP.textContent = "Volcanos National Park: Visit the volcanos and mountains in the Northern province"
                    }
                    break;
                case "gorillaFund":
                    if(boxes[property]){
                        locationP.textContent = "Dian Fossey Gorrila Fund: Learn about how non-profits are helping preserve wildlife in Rwanda"
                    }
                    break;
                case "museum":
                    if(boxes[property]){
                        locationP.textContent = "Rwanda Liberation Museum: Learn about the history of the Rwandan Liberation"
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