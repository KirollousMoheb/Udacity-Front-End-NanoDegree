/* Global Variables */
const myurl='http://api.openweathermap.org/data/2.5/weather?zip=' //baseurl of the api
const myId='&appid=b5e5e056060e664e7d83a0fa21159938&units=imperial'  //my api key
const button=document.querySelector('#generate')    //selecting the generate button
// Create a new date instance dynamically with JS
let d = new Date();

//Event listener for the generate button
button.addEventListener('click',data) //adding a click event to the generae button with a call back function

function data(){
	const zipvalue=document.querySelector('#zip').value  //get the zip value entered by the user
	const userData=document.querySelector('#feelings').value  //get the feeling of the user from the textbox

	getTemp(myurl,zipvalue,myId)
	.then(function(data){
		console.log(data);
		//calling the postData function with 2 parameters,the first one is the post path used in post method in server.js
		//the second parameter an object containing our data
		postData('/addData',{Temperature:data.main.temp,date:d,userData:userData})

		updateInterface('/data') //calling the updateInterface function and passing the get path as a parameter used  in server.js
	})
}

const getTemp= async(myurl,zipvalue,myId) => {
	const res  = await fetch(myurl+zipvalue+myId);// fetch the api complete url using the user's entered zip code
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log('Error in getting the Temperature', error);
    };

}
const postData = async (url = '', data = {}) => {
	  console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data), //transforming data into json stringform
    });

    try {
        const newData = await res.json();
				console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};
const	updateInterface= async(url='')=>{
	const req = await fetch(url);
    try {
        const allData = await req.json();
				console.log(allData);// log the aquired data in browser console
				document.querySelector('#temp').innerHTML = allData.Temperature; //updating the inner html of the temp div with the data recieved
        document.querySelector('#date').innerHTML = allData.date; //updating the inner html of the date div with the data recieved
        document.querySelector('#content').innerHTML = allData.userData; //updating the inner html of the content div with the data recieved
    } catch(error) {
        console.log('Error in updating the Interface', error);
    };

}
