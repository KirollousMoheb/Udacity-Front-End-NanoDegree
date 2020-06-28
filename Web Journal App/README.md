#Hi,My name is Kirollous Moheb and I will be discussing what I did in this project
# Weather-Journal App Project


#Server.js
*I downloaded and installed node and installed the required packages using the terminal in visual code and the npm install packagename
*Using require I created an Instance for the cors,body-parser and express packages,I also created an instance for the constant app 
using the express function
*Middleware is also included to parse the data using json format
*Created port constant with value 8000 ,I tried using port 3000 but it wasn't working to the whole project and kept showing errors
*Using a call back function listening to console.log that the server is running on which port
*Created the get and post routes using the data paths /data and /addData

#app.js
*Declared some constants in the beginning including the generate button,My API key aquired from OpenWeatherMap.com and the URL
*Added an eventlistener to the button with a call back function where this function includes all the other function
*Created a function named getTemp where I use the baseUrl ,my API key and the zip code entered by the user to create a URL to fetch 
it from OpenWeatherMap.com and get the temperature

*The postData function used the same path mentioned in server.js.The same is applied to the getData function
*In the update interface function using the data we got to alter the innerHTML of the divs with ids temp,date,content to update the UI dynamically