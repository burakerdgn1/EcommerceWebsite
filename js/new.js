$(document).ready(function(){

    
    $('body').on('mouseover', function () {
        $(".box").slice(0, 8).show();
    });
    
    $(".btn").on("click", function () {
        $(".box:hidden").slice(0, 4).slideDown();
        if ($(".box:hidden").length == 0) {
            $(".btn").fadeOut();
        }
    });
    
});
