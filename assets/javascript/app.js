$(document).ready(function() {




    
    // get trackers
    var userinput= "";
    var weedname= "";
    var weedrace= "";
    var weedeffect= "";
    var weedflavor= "";
    
    
   //search funtionality
    $("#search2").on("click", function(event1){
        event1.preventDefault()
        userinput = $("#search").val()
        
    //use the search for api
        var queryURL = "http://strainapi.evanbusse.com/tHgjB63/strains/search/name/"+ userinput;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
         
    
    //response for search results
          
        //actually get a response
         
        //append results strain name etc.


    })
        
    

    







   });   




});