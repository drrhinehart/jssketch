$(function() {
    for (var x = 0; x < 100; x++) {
        for (var y = 0; y < 100; y++) {
            $("<div>").addClass("box").appendTo('#screen');
        }
    }
});

$(document).ready(function() {
    $(".box").hover(function() {
     $(this).css("background-color","#13B2AA"); 
    });
});

 function btn() {
    location.reload();
};

//couldn't figure out how to make the size of the pixels adjustable