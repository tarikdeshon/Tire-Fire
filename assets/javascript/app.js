$(document).ready(function () {





    // get trackers
    var userinput = "";
    var weedname = "";
    var weedrace = "";
    var weedeffect = "";



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
                $("#weedname").html("<strong>Strain:</strong> " + response[0].name)
                //append the nrace of object 0 to weedrace 
                $("#weedrace").html("<strong>Race:</strong> " + response[0].race)
                
                //if desciption has a value of null it runs this
                if (response[0].desc === null) {
                    $("#weedeffect").html("<strong>Description:</strong> " + "No Description Available.")
                } 
                //if the desc has a value then it will append the value
                else{$("#weedeffect").html("<strong>Description:</strong> " + response[0].desc)}
                

                console.log(response)
            })























    });




});