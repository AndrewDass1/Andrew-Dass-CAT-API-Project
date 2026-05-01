# Andrew Dass CAT API Project

## What this Project Is
This project uses an API from the website called "TheCatAPI" https://account.thecatapi.com/ (1) to retrieve an image of a cat and the breed it is. 

## How to use this Project
To use the cat api, open the index.html file. Upon opening this html file, it will load automatically load an image of a cat and under it shows the breed of the cat. If you would like to see another cat, please press the button at the bottom of the page to rerun the application and see another cat image.

## How this Project Works
This repository contains three files: index.html, index.css, and index.js. The index.js uses the fetch API to retrieve the cat information from the "TheCATAPI" website and also retrieves HTML tag information from index.html to populate those same HTML tags with the cat infomation found. The index.css styles the index.html page.

In the index.js file has a variable called apiString. Go to the Cat api website (1), make a free account and make an api to use their service. A url will be generated that can be used for your api and can be set equal to the apiString variable. Ex: apiString = "placeYourOwnAPIStringFromAccountHere"; The api string has to be enclosed with single quotations '' or double quotations "". 

## Sources
https://account.thecatapi.com/ (1)