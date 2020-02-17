console.log("hello world");
$(function(){
    //this code runs after page is fully loaded
    //console.log("function1");

    $("#go").on("click", function() {
        //alert("from is submitted");
        console.log("form is submitted");
    });

    
    $("#go").click(function(event) {
        event.preventDefault();
        $('#jumbotron').addClass("d-block");
        //$('#jumbotron').css('display', 'block');
        //$('#jumbotron').show();
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        console.log(firstName + ", " + lastName);
        $("#info").html(firstName + " " + lastName);
        
    });

    
    function myFunction() {
        
      }
});




    