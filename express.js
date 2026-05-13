const express = require('express');
const app = express();
const port = 3000;

const fs = require('node:fs');

app.use(express.static('public'));

const apiString = "";

// Declare Variables outside of fetch scope to access and pass them
var getCatName;
var displayCatImageSrc;
var urlOfCatImagehref;

var getCatDescription;
var getCatTemperament;

var variableData = {};

fetch(apiString)
.then(response => {return response.json()})
.then( data => 
    {
        console.log(data);
        
        var catName = data[0].breeds[0].name;
        console.log(catName);

        // Add title here will display at similar speed to rest of page

        // Defines variables here and send over to HTML

        // Display cat name above picture
        if (catName[0] == "A") { 
            getCatName = "Below is a picture of an " + catName;

            variableData["getCatName"] = getCatName;
        }
        else if(catName[0] == "E") {
            getCatName = "Below is a picture of an " + catName;

            variableData["getCatName"] = getCatName;
        }
        else if(catName[0] == "I") {
            getCatName = "Below is a picture of an " + catName;

            variableData["getCatName"] = getCatName;
        }
        else if(catName[0] == "O") {
            getCatName = "Below is a picture of an " + catName;
            
            variableData["getCatName"] = getCatName;
        }
        else if(catName[0] == "U") {
            getCatName = "Below is a picture of an " + catName;

            variableData["getCatName"] = getCatName;
        }
        else {
            getCatName = "Below is a picture of a " + catName;

            variableData["getCatName"] = getCatName;
        }

        // Shows the picture, send this data over
        displayCatImageSrc = data[0].url;

        
        variableData["displayCatImageSrc"] = displayCatImageSrc;
        // console.log(variableData)

        // Image's dimensions are changed directly in HTML file to 500 by 500

        // Click the picture, opens picture in new tab, send this data over
        urlOfCatImagehref = data[0].url;

        variableData["urlOfCatImagehref"] = urlOfCatImagehref;

        // Show Cat Description, Cat Temperament
        getCatDescription = data[0].breeds[0].description;

        variableData["getCatDescription"] = getCatDescription;

        getCatTemperament = data[0].breeds[0].temperament;

        variableData["getCatTemperament"] = getCatTemperament;
        
        console.log(variableData)
        strVariableData = ("var dataInDictionary = " + JSON.stringify(variableData) + "\n" + "export { dataInDictionary }");
        
        // Sending Data to File:
        fs.writeFile('./public/dataFile.js', strVariableData, err =>  {
            if(err) {
                console.error(err);
            }
        });

    }
)
.catch(err => console.error(err))

// app.get('/', (req, res) => {
//     console.log("hello");

//     res.redirect("localhost:3000/index.html")
// })

app.listen(port, () => {
  console.log(`Cat application running on port ${port}`)
});