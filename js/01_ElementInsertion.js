$(document).ready(function(){
    $("#after").click(function(){
        $("#wrapper").append("<p>I was just <span>appended.</span> It doesn't hurt!</p>")
    });

    $("#before").click(function(){
        $("#wrapper").prepend("<p>I was just <span>prepended.</span> It doesn't hurt!</p>")
    });
});