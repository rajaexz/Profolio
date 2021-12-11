
$(document).ready(function(){
    $("#myInput").on("input", function(){
        // Print entered value in a div box
        $("#result").text($(this).val());
    });
});
