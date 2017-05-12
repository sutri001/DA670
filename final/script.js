//Background color change
var colors = ['green', 'blue', 'purple'];
var active = 0;

	setInterval(function(){
    	document.querySelector('body').style.background = colors[active];
    	active++;
    	if (active == colors.length) active = 0;
	}, 5000);


//Javascript Prompt
function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML = "Welcome " + person + "! How's it going?";
    }
}