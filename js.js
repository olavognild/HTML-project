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

    fetch('https://api.github.com/search/repositories?q=language:javascript+created:>2017-09-13&sort=stars&order=desc')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < 5; i++) {
                var item = data.items[i];
                var linknamn = data.items[i].html_url;
                var projektnamn = data.items[i].name;
                var linkägare = data.items[i].owner.html_url;
                var anvnamn = data.items[i].owner.login;
                $('#jstrend').append(" - Namn: " + "<a target=" + "'_blank'" + "href='" + linknamn + "'>" + "<strong>" + projektnamn + "</strong>" + "</a>" + " | Ägare: " + "<a target=" + "'_blank'" + "href='" + linkägare + "'>" + "<strong>" + anvnamn + "</strong>" + "</a>" + " | Stjärnor: " + item.stargazers_count + "<br>");
            }
        });

    fetch('https://api.github.com/search/repositories?q=language:css+created:>2017-09-13&sort=stars&order=desc')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < 5; i++) {
                var item = data.items[i];
                var linknamn = data.items[i].html_url;
                var projektnamn = data.items[i].name;
                var linkägare = data.items[i].owner.html_url;
                var anvnamn = data.items[i].owner.login;
                $('#csstrend').append(" - Namn: " + "<a target=" + "'_blank'" + "href='" + linknamn + "'>" + "<strong>" + projektnamn + "</strong>" + "</a>" + " | Ägare: " + "<a target=" + "'_blank'" + "href='" + linkägare + "'>" + "<strong>" + anvnamn + "</strong>" + "</a>" + " | Stjärnor: " + item.stargazers_count + "<br>");
            }
        });
})


//Bildspel
var images = ["img/port1.jpg", "img/port2.png", "img/port3.png"];
var imageNumber = 0;
var imageLength = images.length - 1;

//Byt till nästa bild
function changeImage() {
    imageNumber++;

    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("nästaknapp").addEventListener("click", changeImage);

//byt till föregående bild
function lastImage() {
    imageNumber--;

    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("föregåendeknapp").addEventListener("click", lastImage);

//Gör att bildspelet rullar på/stannar
var stopp = false;

var intervalHandle = setInterval(changeImage, 1000);

function bildTimer() {
    if (!stopp) {
        clearInterval(intervalHandle);
        stopp = true;
    } else {
        intervalHandle = setInterval(changeImage, 1000);
        stopp = false;
    }
}

document.getElementById("startstopp").addEventListener("click", bildTimer);

//Byter text på knapp beroende på om bildspelet rullar eller inte
function bytText() {
    var startstoppen = document.getElementById("startstopp");
    if (startstoppen.value == "Stoppa") startstoppen.value = "Starta";
    else startstoppen.value = "Stoppa";
}

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
var vnamn = document.getElementById("namn");
var vTlf = document.getElementById("tlf");
var vMail = document.getElementById("mail");
var vMsg = document.getElementById("contactMsg");


function validera(element, regex) {

    var value = element.value;
    var valid = regex.test(value);

    element.style.backgroundColor = valid ? "green" : "red";
    if (value.length < 1) {
        element.style.backgroundColor = "white";
    }
}

$(document).ready(function () {
    $("#contactBtn").on("click", function () {

        var namnTxt = document.getElementById("namn").value;
        var tlfTxt = document.getElementById("tlf").value;
        var mailTxt = document.getElementById("mail").value;
        var msgTxt = document.getElementById("contactMsg").value;

        var namnLength = namnTxt.length;
        var tlfLength = tlfTxt.length;
        var mailLength = mailTxt.length;
        var msgLength = msgTxt.length;


    });
})

vnamn.addEventListener("keyup", function () {

    validera(vnamn, /^[a-zA-ZåäöÅÄÖ -]{1,50}$/);
})

vTlf.addEventListener("keyup", function () {

    validera(vTlf, /^[0-9- ]{3,20}$/);
})

vMail.addEventListener("keyup", function () {

    validera(vMail, /[a-zA-Z0-9\._-]+@[a-zA-Z-.]+\.[a-zA-Z]{1,50}$/);
})

vMsg.addEventListener("keyup", function () {

    validera(vMsg, /^.{1,250}$/);
})


//Hamburgarmeny
$(document).ready(function () {
    $("#burgar-div").on('click', function () {
        $(this).toggleClass("open");
    });
});

$(document).ready(function () {
    $("#burgar-div").on("click", function () {

        var currentClass = $("#burgar-div").attr("class");

        if (currentClass === "open") {
            $("#div-menu").removeClass("hidden").addClass("open-menu");
            $("#div-lista").removeClass("hidden").addClass("open-list");
        } else {
            $("#div-menu").removeClass("open-menu").addClass("hidden");
            $("#div-lista").removeClass("open-list").addClass("hidden");
        }

    });
});