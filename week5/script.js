var info = document.getElementById("info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://data.maryland.gov/resource/sw58-e3j9.json');
  ourRequest.onload =  function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].state + " " + "Unmployment Rate:" + "  " + data[i].unemployment_rate + ".</p>";
  }

  info.insertAdjacentHTML('beforeend', htmlString);

}
