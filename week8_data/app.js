// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

// --- ROUTES --- //

// Show all the posts
app.get('/',function(req,res){	
	res.render('home');
});

app.get('/profile/:places',function(req,res){
	// Get the name from the URL and send it to the template
	data = {
		places: req.params.places
	};
	res.render('places',data);
	
});

// start server
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
}
});