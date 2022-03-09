var regionNavEl = document.getElementById('region-navigation');

function loadRegionPage(regionData) {
    var search = document.getElementById("region-div")
    if (search){
        search.remove();
    }
    for(const [key, value] of Object.entries(regionData)){
        var regionDivEl = document.createElement("div")
        regionDivEl.id = "region-div"
        var regionH1El = document.createElement("h1")
        switch(key){
            case "North":
                regionH1El.textContent = "Northern Region"
                break;
            case "East":
                regionH1El.textContent = "Eastern Region"
                break;
            case "Kigali":
                regionH1El.textContent = "Kigali"
                break;
            case "South":
                regionH1El.textContent = "Southern Region"
                break;
            case "West":
                regionH1El.textContent = "Western Region"
                break;
        }
        regionDivEl.appendChild(regionH1El);
        document.body.appendChild(regionDivEl)
    }
}

function getProvince(event){
    var region = event.target.id;
    fetch("https://rwanda.p.rapidapi.com/", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "rwanda.p.rapidapi.com",
		    "x-rapidapi-key": "c1b419393amsh42ae29cc7d1317bp1d79dejsna89c17a137aa"
	    }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        switch(region){
            case "eastern-region":
                loadRegionPage(data.data[0]);
                break;
            case "kigali":
                loadRegionPage(data.data[1]);
                break;
            case "northern-region":
                loadRegionPage(data.data[2]);
                break;
            case "southern-region":
                loadRegionPage(data.data[3]);
                break;
            case "western-region":
                loadRegionPage(data.data[4]);
                break;
            default:
                console.log("not working")
        }
    })
}



regionNavEl.addEventListener('click', getProvince)