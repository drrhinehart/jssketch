$(function() {
    for (var x = 0; x < 50; x++) {
        for (var y = 0; y < 50; y++) {
            $("<div>").addClass("box").appendTo('#screen');
        }
    }
});

/*function btn(){
	var number;
	var grid = prompt("Please enter a number between 1-64");
};*/


$(document).ready(function() {
    $(".box").hover(function() {
        $(this).css("background-color","#13B2AA"); //edit, body must be in quotes!
    });
});

 function btn() {
     location.reload();
};