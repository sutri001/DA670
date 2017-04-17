// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

// --- routes --- //
app.get("/",function(req,res){
	// An object to hold the data that will get fed into the template.
	// Note! the property names here must match the variable names in handlebars
	var data = {
		 pageTitle: "Candy from all over the world!",
		 pageContent: "Candy Palace is the place to be! We have over 100 brands of cany from all over the world!"
	};
	// Render the template using this data
	res.render("page", data);
});

app.get("/menu",function(req,res){
	// set up the content
	var data = {
		 body: "U.S. Brand, Europe Brands",
		 
	};
	// render the template
	res.render("main", data);
});

app.get("/hours",function(req,res){
	var data = {
		 body: "Monday - Friday: 10AM to 6PM and Saturday- Sunday: 11AM to 7PM",
		 
	};
	res.render("main",data);
});


<<<<<<< HEAD
app.listen(1000, function(){
	console.log( 'Express started on http://localhost:1000; press Ctrl-C to terminate.' );
});
=======
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});
>>>>>>> origin/master
