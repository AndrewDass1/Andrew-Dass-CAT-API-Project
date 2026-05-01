getTitle = document.getElementById("pageTitle")

getForm = document.getElementById("theForm");

getCatName = document.getElementById("catNameTag");

getCatImage = document.getElementById("displayCatImage");

getCatDescription = document.getElementById("catDescription");

getCatTemperament = document.getElementById("catTemperament");

apiString = '';

fetch(apiString)
.then(response => {return response.json()})
.then( data => 
    {
        console.log(data);
        
        catName = data[0].breeds[0].name;
        console.log(catName);

        // Add title here will display at similar speed to rest of page
        getTitle.innerHTML = "It's a Cat!";

        // Display cat name above picture
        if (catName[0] == "A") { 
            getCatName.innerHTML = "Below is a picture of an " + data[0].breeds[0].name;
        }
        else if(catName[0] == "E") {
            getCatName.innerHTML = "Below is a picture of an " + data[0].breeds[0].name;
        }
        else if(catName[0] == "I") {
            getCatName.innerHTML = "Below is a picture of an " + data[0].breeds[0].name;
        }
        else if(catName[0] == "O") {
            getCatName.innerHTML = "Below is a picture of an " + data[0].breeds[0].name;    
        }
        else if(catName[0] == "U") {
            getCatName.innerHTML = "Below is a picture of an " + data[0].breeds[0].name;
        }
        else {
            getCatName.innerHTML = "Below is a picture of a " + data[0].breeds[0].name;
        }

        // Shows the picture
        displayCatImage.src = data[0].url;
        displayCatImage.height = 500;
        displayCatImage.width = 500;

        // Click the picture, opens picture in new tab
        urlOfCatImage.href = data[0].url;

        // Show Cat Description, Cat Temperament
        getCatDescription.innerHTML = data[0].breeds[0].description;

        getCatTemperament.innerHTML = data[0].breeds[0].temperament;

        // Create and add button to refresh page, because doing it this way, will load after the picture and use a promise to achieve this
        
        setTimeout( function buttonOnBottomPage() {
            var makeDivTag = document.createElement("div");
            var makeLink = document.createElement("a");
            var buttonToRefreshPage = document.createElement("button");

            // Make div tag and place button in div tag, then center it to center button to middle of page
            // Make <a> connect to button, so when button is clicked it redirects to html page
            // Assign attributes for div and button's functionality

            makeDivTag.setAttribute("id", "divTagOne");

            makeLink.href="index.html";

            buttonToRefreshPage.innerText = "Click Here To See Another Cat";
            buttonToRefreshPage.setAttribute("id", "buttonInDivTagOne");
                       
            makeLink.appendChild(buttonToRefreshPage);

            makeDivTag.appendChild(makeLink);
            document.body.append(makeDivTag);

            // 
        }, 1000)
        // 1000 - 1 second



       


    }
)
.catch(err => console.error(err))