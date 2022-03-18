/* <nav> element which is the parent to the region buttons
    a 'click' event listener is added to this at the bottom of the file */
var regionNavEl = document.getElementById('region-navigation');

function loadRegionPage(regionData) {
    /*  finds if there is an existing page loaded and removes it
        so the new page can load in its place */
    var searchRegionDiv = document.getElementById("region-div")
    if (searchRegionDiv){
        searchRegionDiv.remove();
    }

    /*  loops through the regional data based on the region button clicked; 
        this loop returns each key its value in the regionData object
        to variables "key, value" respectively */
    for(const [key, value] of Object.entries(regionData)){
        // creates a container to hold all elements about the region
        var regionDivEl = document.createElement("div");
        /*  assigns an id so it can be removed when another region 
            button is clicked */
        regionDivEl.id = "region-div";
        regionDivEl.className = "row container";
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div1.className = "col m6 s12"
        div2.className = "col s12 xl3 offset-xl2"
        // DIV 1: creates a h1 element, link to the region page, and a regional iframe
        var regionH1El = document.createElement("h1");
        var regionPageLink = document.createElement("a");
        regionPageLink.className = "yellow-text accent-4"
        var iframeEl = document.createElement("iframe");
        iframeEl.setAttribute("width","600");
        iframeEl.setAttribute("height","450");
        iframeEl.setAttribute("style","border:0");
        iframeEl.setAttribute("allowfullscreen", "") ;
        iframeEl.setAttribute("loading","lazy");
        // DIV 2: Highlights of the province
        provinceUl = document.createElement("ul");
        provinceUl.className = "flow-text";
        provinceli1 = document.createElement("li");
        provinceli2 = document.createElement("li");
        provinceli3 = document.createElement("li");
        provinceli1.className = "section"
        provinceli2.className = "section"
        provinceli3.className = "section"
        /*  this dynamicallys populates the text of the h1 element, google map,
            and highlight list based on the returned key of the regionData */
        switch(key){
            case "North":
                regionH1El.textContent = "Northern Province Page"
                iframeEl.setAttribute('src',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255247.50118893568!2d29.72277829363196!3d-1.6105314794483283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc42967673bda5%3A0x72a4336a4d2a5469!2sNorthern%20Province%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1646873675630!5m2!1sen!2sus")
                regionPageLink.setAttribute('href', "./region-pages/northern-region.html")
                break;
            case "East":
                regionH1El.textContent = "Eastern Province Page"
                iframeEl.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020921.933328752!2d29.867853601452822!3d-1.7411041389790136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db8d18651bd375%3A0xf64449a9ab46b13e!2sEastern%20Province%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1646875687745!5m2!1sen!2sus")
                regionPageLink.setAttribute('href', "./region-pages/eastern-region.html")
                break;
            case "Kigali":
                regionH1El.textContent = "Kigali Page"
                iframeEl.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180455.12495614437!2d30.065680806565737!3d-1.9395244718725195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1646875826591!5m2!1sen!2sus")
                regionPageLink.setAttribute('href', "./region-pages/kigali.html")
                break;
            case "South":
                regionH1El.textContent = "Southern Province Page"
                iframeEl.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858295.5488373828!2d29.703887937304515!3d-2.124870312673158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcbb25c78f1e1b%3A0xdce15a5b60b912f4!2sSouthern%20Province%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1646875911170!5m2!1sen!2sus")
                regionPageLink.setAttribute('href', "./region-pages/southern-region.html")
                break;
            case "West":
                regionH1El.textContent = "Western Province Page"
                iframeEl.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510345.7615495495!2d28.988253522355972!3d-2.124341255557795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd1d1b7ef78b5d%3A0xc08b48dab00370f5!2sWestern%20Province%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1646875954460!5m2!1sen!2sus")
                regionPageLink.setAttribute('href', "./region-pages/western-region.html")
                provinceli1.textContent = "Enjoy gorgeous views and relaxation by Lake Kivu in the provincial captial of Kibuye"
                provinceli2.textContent = "And the beach and island retreats in the town of Kigufi"
                provinceli3.textContent = "Once rejuvenated go on a mountain hike and jungle adventure in the country side of the Western Province"
                break;
        }
        // DIV 1: appends the h1 element to the division container
        regionPageLink.appendChild(regionH1El);
        div1.appendChild(regionPageLink);
        div1.appendChild(iframeEl);
        // DIV 2: appends highlight ul to div 2 then main container
        provinceUl.append(provinceli1, provinceli2, provinceli3);
        div2.appendChild(provinceUl);
        // appends div container to main container
        regionDivEl.appendChild(div1);
        regionDivEl.appendChild(div2);
        // appends the div container to the body of the document 
        document.body.appendChild(regionDivEl);
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