// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express=require('express')

// Start up an instance of app
const app=express()

/* Middleware*/

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// Cors for cross origin allowance
const cors=require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port=8000
const server=app.listen(port,listening)
function listening(){
    console.log(`The server is running on ${port}`)
}
//Get routes using the path /data
app.get('/data',getdata)
function getdata(req,res){
	res.send(projectData)

}

//Post routes using the path /addData
app.post('/addData',postdata)
function postdata(req,res) {
	//an object pushed into the array ptojectData
	projectData = {
        Temperature: req.body.Temperature,
        date: req.body.date,
        userData: req.body.userData
    };

}