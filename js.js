$(document).scroll(function(){
    if($(document).scrollTop() > 150) {
        $("nav, .plogo").addClass("scroll");
    }
    else {
        $("nav, .plogo").removeClass("scroll");
    }
});


function bytSlide() {
    var slide1 = document.getElementById("personSlide1"); 
    var slide2 = document.getElementById("personSlide2");
 
    slide1.style.display = (
        slide1.style.display == "none" ? "block" : "none"); 
    slide2.style.display = (
        slide2.style.display == "none" ? "block" : "none"); 
 }

 $(document).ready(function () {
    $("#link1").click(function () {
        $path = $("#Box1").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })
})