// wait for page to load
$(window).load(function(){
	var baseUrl = 'https://api.tumblr.com/v2/tagged?tag=';
	var tag = 'travel';
	var apiKey = 'YnMtAgCrYbbG6OMgiUoOZLd0J58QP6aveDElKDzU38cWEmP9fW';
	var url = 'https://api.tumblr.com/v2/tagged?tag=travel;&api_key=YnMtAgCrYbbG6OMgiUoOZLd0J58QP6aveDElKDzU38cWEmP9fW';

    $.get(url, function (data) {
    	// Check the web developer console for the whole response
    	console.log(data);
        // Loop through posts -- tumblr calls this section "response" 
        for(var i = 0; i < data.response.length; i++){
        	var title = data.response[i].summary;
        	// create tag with jQuery
        	var p = $('<p>' + title + '</p>');
        	$('#container').append(p);

        }

    }, "jsonp"); 
});