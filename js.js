//Animation för navbaren
$(document).scroll(function () {
    if ($(document).scrollTop() > 150) {
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
    //Animation för scroll till toppen av sidan
    $("#linkHome").click(function () {
        $path = $("#home").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 750);
    })
    //Animation för scroll till anchorPoint1
    $("#link1").click(function () {
        $path = $("#anchor1").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint2
    $("#link2").click(function () {
        $path = $("#anchor2").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint3
    $("#link3").click(function () {
        $path = $("#anchor3").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })
})




function googleMaps() {
    //Google Map
    var orebro = { lat: 59.254496, lng: 15.243522 };
    var centerOrebro = {
        center: orebro,
        zoom: 13,
    };
    //Markören på kartan
    var kartan = new google.maps.Map(document.getElementById("googleMap"), centerOrebro);
    var marker = new google.maps.Marker({
        position: orebro,
        map: kartan
    });
}

//Validering av textfält
