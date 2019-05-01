



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
    var weed = [
        name="", 

        race="",

        effect="",

        flavor="",];

    
    //   var animalImage = $("<img>");
    //   animalImage.attr("src", still);
    //   animalImage.attr("data-still", still);
    //   animalImage.attr("data-animate", animated);
    //   animalImage.attr("data-state", "still");
    //   animalImage.addClass("animal-image");
        
    

      animalDiv.append(p);
      animalDiv.append(animalImage);

      $("#animals").append(animalDiv);
    }
  });
});
































});