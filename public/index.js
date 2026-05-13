import { dataInDictionary } from "./dataFile.js";

var titleOfPage = document.getElementById("pageTitle");

var retrieveForm = document.getElementById("theForm");

var retrieveCatName = document.getElementById("catNameTag");

var retrieveCatImage = document.getElementById("displayCatImage");

var insertLinkForImage = document.getElementById("urlOfCatImage");

var retrieveCatDescriptionTitle = document.getElementById("catDescriptionTitle");
var retrieveCatDescription = document.getElementById("catDescription");

var retrieveCatTemperamentTitle = document.getElementById("catTemperamentTitle");
var retrieveCatTemperament = document.getElementById("catTemperament");


// Fill in innerHTML

titleOfPage.innerHTML = "It's a Cat!";

retrieveCatName.innerHTML = dataInDictionary["getCatName"];

retrieveCatImage.src = dataInDictionary["displayCatImageSrc"];

insertLinkForImage.href = dataInDictionary["urlOfCatImagehref"];

retrieveCatDescriptionTitle.innerHTML = "Description";
retrieveCatDescription.innerHTML = dataInDictionary["getCatDescription"];

retrieveCatTemperamentTitle.innerHTML = "Attributes";
retrieveCatTemperament.innerHTML = dataInDictionary["getCatTemperament"];

// button to refresh page

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