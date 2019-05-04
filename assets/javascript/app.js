$(document).ready(function () {





    // get trackers
    var userinput = "";
    var weedname = "";
    var weedrace = "";
    var weedeffect = "";
    var weedflavor = "";


    //search funtionality
    $("#search2").on("click", function (event1) {
        event1.preventDefault()
        userinput = $("#search").val()

        //use the search for api
        var queryURL = "http://strainapi.evanbusse.com/tHgjB63/strains/search/name/" + userinput;
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // after api request is made get these the object 0 
            .then(function (response) {
                //append the name of object 0 to weedname 
                $("#weedname").append(response[0].name)
                //append the nrace of object 0 to weedrace 
                $("#weedrace").append(response[0].race)
                //append the description of object 0 to weedeffect
                $("#weedeffect").append(response[0].desc)




                console.log(response)



                //response for search results

                //actually get a response

                //append results strain name etc.


            })











    });




});