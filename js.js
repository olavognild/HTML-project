$(document).scroll(function(){
    if($(document).scrollTop() > 150) {
        $("nav").addClass("scroll");
    }
    else {
        $("nav").removeClass("scroll");
    }
});