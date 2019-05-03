$(document).ready(function () {

            // When the user scrolls the page, execute myFunction 
            window.onscroll = function () {
                myFunction()
            };

            // Get the navbar
            var navbar = document.getElementById("navbar");

            // Get the offset position of the navbar
            var sticky = navbar.offsetTop;

            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function myFunction() {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky");
                }
            }



            // get trackers
            var userinput;


            //search funtionality
            $(document).on('click', '.expression', function () {
                    //on click search open new window
                    //use hide and unhide in materilize/sass ez 


                    //search giphy for whatver searched
                    //return 1 result using the search term (should be weed strain) into class img1

                    //use strain api to get race name effect and flavor
                    //append into appropriate ids in html

                    //







                )
            };