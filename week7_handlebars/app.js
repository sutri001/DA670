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
		 pageTitle: "Brands of Candy",
		 pageContent: "Brand1, Brand2, Brand3",
		 
	};
	// render the template
	res.render("page", data);
});

app.get("/hours",function(req,res){
	var data = {
		 pageTitle: "Come Visit Us!", 
		 pageContent: "Monday - Friday: 10AM to 6PM and Saturday- Sunday: 11AM to 7PM",
	};
	res.render("page",data);
});


// 404 Not found catch-all handler 
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(2000, function(){
	console.log( 'Express started on http://localhost:2000; press Ctrl-C to terminate.' );
});