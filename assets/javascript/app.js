



//so once the loads up run this code
$(document).ready(function() {
    
// get trackers
var userinput;

// create object 



var type = $(this).attr("data-type");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=tHgjB63";
    
    $.ajax({
        url: queryURL,
        method: "GET"
});

    .then(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
     

    
        
    var weed = [
        // name="", 

        // race="",

        // effect="",

        // flavor="",
        
    ];


      animalDiv.append(p);
      animalDiv.append(animalImage);

      $("#animals").append(animalDiv);
    }
  });
});
































});