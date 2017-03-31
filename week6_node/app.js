// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();


//routes
app.get('/',function(request,response){
	// respond with quote
	response.send("<h1>Welcome to the home page!</h1>")
});

app.get('/about',function(request,response){
	// respond with spanish
	response.send("<h2>Hola! Como Estas?</h2>")
});

app.get('/news',function(request,response){
	// respond with "news"
	response.send("<h2>In the news today...</h2>")
});

app.get('/contact',function(request,response){
	// respond with 
	response.send("<h2>feedback is welcomed</h2>")
});


// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});