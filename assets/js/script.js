/* <nav> element which is the parent to the region buttons
    a 'click' event listener is added to this at the bottom of the file */
var regionNavEl = document.getElementById('region-navigation');

function loadRegionPage(regionData) {
    /*  finds if there is an existing page loaded and removes it
        so the new page can load in its place */
    var search = document.getElementById("region-div")
    if (search){
        search.remove();
    }

    /*  loops through the regional data based on the region button clicked; 
        this loop returns each key its value in the regionData object
        to variables "key, value" respectively */
    for(const [key, value] of Object.entries(regionData)){
        // creates a container to hold all elements about the region
        var regionDivEl = document.createElement("div")
        /*  assigns an id so it can be removed when another region 
            button is clicked */
        regionDivEl.id = "region-div"
        // creates a h1 element for the region page
        var regionH1El = document.createElement("h1")
        /*  this dynamicallys populates the text of the h1 element
            based on the returned key of the regionData */
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
        // appends the h1 element to the division container
        regionDivEl.appendChild(regionH1El);
        // appends the div container to the body of the document 
        document.body.appendChild(regionDivEl)
    }
}

// fired when a button in the region <nav> element is clicked
function getProvince(event){
    // each button has a unique id which is the name of the region
    var region = event.target.id;
    /*  this fetches the Rwanda API which has objects containing 
        every location in Rwanda */
    fetch("https://rwanda.p.rapidapi.com/", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "rwanda.p.rapidapi.com",
		    "x-rapidapi-key": "c1b419393amsh42ae29cc7d1317bp1d79dejsna89c17a137aa"
	    }
    })
    .then(function(response){
        // returns the response as a promise which is a JavaScript object
        return response.json();
    })
    .then(function(data){
        /*  checks which button was clicked by id and loads
            the page with corresponding regional data from the API */
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

/*  <nav> listens for a click on anyone of its button children
    fires the function getProvince when a button is clicked */
regionNavEl.addEventListener('click', getProvince)